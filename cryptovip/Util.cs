using cryptovip.Models;
using crytopVipDb;
using crytopVipDb.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
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

        public static void sendEmail(string to, string subject, string body, bool ishtml, MemoryStream[] attachmentStreams = null, string[] attachmentNames = null,
            string outgoingemail = "femi661@gmail.com", string username = "femi661@gmail.com", string password = "_Made_Man33", string outoingemailsmtpserver = "google.com", int outoingemailsmtpport = 443, bool usessl = false, string outoingemailname = "CryptoVIP")
        {
            MailMessage mailmsg = new MailMessage(outgoingemail, to);
            mailmsg.Subject = subject;
            mailmsg.Body = body;
            mailmsg.IsBodyHtml = ishtml;
            mailmsg.From = new MailAddress(outgoingemail, outoingemailname);
            mailmsg.Sender = new MailAddress(outgoingemail, outoingemailname);
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
    }
}
