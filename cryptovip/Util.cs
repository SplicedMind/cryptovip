using cryptovip.Models;
using crytopVipDb;
using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography;

namespace cryptovip
{
    public static class Util
    {
        public static UserProfileModel Signin(UserModel user, DBContext dBContext)
        {
            string password = user.GetPassword();
            User _user = dBContext.Users.Where(x => x.UserName == user.Email && x.Password == password)
                .Include(x => x.UserProfile).FirstOrDefault();
            if (_user != null)
            {
                return (UserProfileModel)_user.UserProfile;
            }
            return null;
        }

        public static UserProfileModel Signup(UserModel user, DBContext dBContext)
        {
            if (dBContext.Users.Any(x => x.UserName == user.Email))
            {
                throw new Exception($"{user.Email} has been associated with another user account, please use a different e-mal address");
            }
            dBContext.Users.Add(user);
            dBContext.SaveChanges();

            return (UserProfileModel)dBContext.UserProfiles.Where(x => x.UserName == user.Email).FirstOrDefault();
        }

        public static UserProfileModel UpdateProfile(UserProfileModel _p, DBContext dBContext)
        {
            UserProfile profile = dBContext.UserProfiles.Where(x => x.UserName == _p.UserName).FirstOrDefault();
            if (profile == null)
            {
                throw new Exception($"{_p.UserName} not found");
            }

            profile.DateOfBirth = _p.DateOfBirth;
            profile.Phone = _p.Phone;
            profile.Address = _p.HomeAddress;

            dBContext.Entry(profile).State = EntityState.Modified;
            dBContext.SaveChanges();

            return (UserProfileModel)dBContext.UserProfiles.Where(x => x.UserName == _p.UserName).FirstOrDefault();
        }

        public static UserProfileModel GetProfile(string username, DBContext dBContext)
        {
            UserProfileModel profile = (UserProfileModel)dBContext.UserProfiles.Where(x => x.UserName == username).FirstOrDefault();

            if (profile == null)
            {
                throw new Exception($"{username} not found");
            }

            return profile;
        }

        public static List<PaymentOptionModel> GetPaymentOptions(DBContext dBContext)
        {
            return dBContext.PaymentOptions.Select(x => new PaymentOptionModel { Id = x.ID, Address = x.Address, Currency = x.Currency, Network = x.Network }).ToList();
        }

        public static List<TransactionModel> GetTransactions(string accountNumber, DBContext dBContext)
        {
            return dBContext.Transactions.Where(x => x.AccountNumber == accountNumber).Select(x => (TransactionModel)x).ToList();
        }

        public static List<AccountModel> GetAccounts(string accountNumber, DBContext dBContext)
        {
            return dBContext.Accounts.Where(x => x.AccountNumber == accountNumber).Select(x => (AccountModel)x).ToList();
        }

        public static dynamic GetAddress(byte currencyid, string accountNumber, DBContext dBContext)
        {
            string currency = dBContext.PaymentOptions.Where(x => x.ID == currencyid).Select(x => x.Currency).FirstOrDefault();
            return dBContext.Accounts.Where(x => x.AccountNumber == accountNumber && x.Currency == currency).Select(x => new { Address = x.ReceivingAddress, x.Network}).ToList();
        }

        public static PaymentOptionModel MakePayment(PaymentModel payment, DBContext dBContext)
        {
            var payOptionInfo = dBContext.PaymentOptions.Where(x => x.ID == payment.CurrencyID).Select(x => new PaymentOptionModel { Id = x.ID, Address = x.Address, Currency = x.Currency, Network = x.Network, MinimumConfirmation = x.MinimumConfirmation }).FirstOrDefault();
            
            dBContext.Transactions.Add(new Transaction
            {
                AccountNumber = payment.AccountNumber,
                Credit = payment.Amount,
                Currency = payOptionInfo.Currency,
                Status = PaymentStatus.Pending,
                Created = DateTime.UtcNow
            });

            Account account = dBContext.Accounts.Where(a => a.AccountNumber == payment.AccountNumber && a.Currency == payOptionInfo.Currency).FirstOrDefault();

            ///TODO: Move to admin, should be done when admin has processed the payments 
            if(account == null)
            {
                dBContext.Accounts.Add(new Account
                {
                    AccountNumber = payment.AccountNumber,
                    Currency = payOptionInfo.Currency,
                    //Capital = payment.Amount
                });
            }

            dBContext.SaveChanges();

            return payOptionInfo;
        }

        public static PaymentOptionModel WithdrawFunds(WithdrawalModel withdrawal, DBContext dBContext)
        {
            var payOptionInfo = dBContext.PaymentOptions.Where(x => x.ID == withdrawal.CurrencyID).Select(x => new PaymentOptionModel { Id = x.ID, Address = x.Address, Currency = x.Currency, Network = x.Network, MinimumConfirmation = x.MinimumConfirmation }).FirstOrDefault();
            
            dBContext.Transactions.Add(new Transaction
            {
                AccountNumber = withdrawal.AccountNumber,
                Debit = withdrawal.Amount,
                Currency = payOptionInfo.Currency,
                Status = PaymentStatus.Pending,
                Created = DateTime.UtcNow
            });

            Account account = dBContext.Accounts.Where(a => a.AccountNumber == withdrawal.AccountNumber && a.Currency == payOptionInfo.Currency).FirstOrDefault();

            ///TODO: Move to admin, should be done when admin has processed the payments 
            if (account == null)
            {
                dBContext.Accounts.Add(new Account
                {
                    AccountNumber = withdrawal.AccountNumber,
                    Currency = payOptionInfo.Currency,
                    ReceivingAddress = withdrawal.Address,
                    Network = withdrawal.Network
                });
            }

            dBContext.SaveChanges();

            return payOptionInfo;
        }

        public static void sendEmail(string to, string subject, string body, bool ishtml, MemoryStream[] attachmentStreams = null, string[] attachmentNames = null,
            string outgoingemail = "", string username = "", string password = "", string outoingemailsmtpserver = "", int outoingemailsmtpport = 587, bool usessl = true, string outoingemailname = "")
        {
            MailMessage mailmsg = new MailMessage();
            mailmsg.IsBodyHtml = ishtml;
            mailmsg.From = new MailAddress(outgoingemail, outoingemailname);
            mailmsg.To.Add(new MailAddress(to));
            mailmsg.Subject = subject;
            mailmsg.Body = body;

            if (attachmentStreams != null)
            {
                int i = 0;
                foreach (var ms in attachmentStreams)
                {
                    string attachmentname = attachmentNames != null && attachmentNames.Length > i ? attachmentNames[i] : "Attachment " + i;
                    MemoryStream attachment = new MemoryStream(ms.ToArray());
                    mailmsg.Attachments.Add(new Attachment(attachment, attachmentname, "application/pdf"));
                    i++;
                }
            }
            SmtpClient smtclient = new SmtpClient(outoingemailsmtpserver, outoingemailsmtpport);
            smtclient.EnableSsl = usessl;
            smtclient.Credentials = new System.Net.NetworkCredential(username, password);
            smtclient.Send(mailmsg);
        }

        internal static void VerifyEmail(string email, DBContext dBContext)
        {
            if (!dBContext.UserProfiles.Any(x => x.UserName == email && x.Enabled))
            {
                bool exist = true;
                string accNum;
                int count = 0;
                do
                {
                    accNum = $"VP{GenerateAccountNumber()}";
                    exist = dBContext.UserProfiles.Any(x => x.VIPAccountNumber == accNum);
                    if (++count > 20)
                    {
                        break;
                    }
                }
                while (exist);

                var user = dBContext.UserProfiles.Where(x => x.UserName == email).FirstOrDefault();
                if (user != null)
                {
                    user.Enabled = true;
                    user.VIPAccountNumber = accNum;
                    dBContext.Entry(user).State = EntityState.Modified;
                    dBContext.SaveChanges();
                }
            }
        }

        internal static string GenerateAccountNumber()
        {
            return RandomNumberGenerator.GetInt32(0, 9999999).ToString("D8");
        }
    }
}
