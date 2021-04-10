using cryptovip.Models;
using crytopVipDb;
using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

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

        public static List<PaymentOptionModel> GetPaymentOptions(DBContext dBContext)
        {
            return dBContext.PaymentOptions.Select(x => new PaymentOptionModel { Id = x.ID, Address = x.Address, Channel = x.Channel, Network = x.Network }).ToList();
        }

        public static PaymentOptionModel MakePayment(PaymentModel payment, DBContext dBContext)
        {
            dBContext.Transactions.Add(new Transactions
            {
                AccountNumber = payment.AccountNumber ?? "test account",
                Debit = payment.Amount,
                PaymentOptionID = payment.Currency,
                Status = PaymentStatus.Pending,
                Created = DateTime.UtcNow

            });
            dBContext.SaveChanges();

            return dBContext.PaymentOptions.Where(x => x.ID == payment.Currency).Select(x => new PaymentOptionModel { Id = x.ID, Address = x.Address, Channel = x.Channel, Network = x.Network }).FirstOrDefault();
        }

        public static void sendEmail(string to, string subject, string body, bool ishtml, MemoryStream[] attachmentStreams = null, string[] attachmentNames = null,
            string outgoingemail = "femiakinbode@crowtech.org", string username = "AKIA5BLLAKCRAKX6CM74", string password = "BMUjCY+CvxPef2kCXXqdBM5eGraJ0ok1aJD8XvKcmpet", string outoingemailsmtpserver = "email-smtp.eu-west-1.amazonaws.com", int outoingemailsmtpport = 587, bool usessl = true, string outoingemailname = "CryptoVIP")
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
            if(!dBContext.UserProfiles.Any(x => x.UserName == email && x.Enabled))
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
                if(user != null)
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
