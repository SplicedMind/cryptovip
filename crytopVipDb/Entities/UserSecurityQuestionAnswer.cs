using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace crytopVipDb.Entities
{
    public class UserSecurityQuestionAnswer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ID { get; set; }

        [ForeignKey("ID")]
        public byte SecurityQuestionID { get; set; }

        public SecurityQuestion SecurityQuestion { get; set; }

        [MaxLength(100)]
        public string Answer { get; set; }
                
        [MaxLength(320)]
        [ForeignKey("UserName")]
        public string UserName { get; set; }

        public User User { get; set; }
    }
}
