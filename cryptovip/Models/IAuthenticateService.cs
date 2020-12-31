namespace cryptovip.Models
{
    public interface IAuthenticateService
    {
        UserProfileModel Authenticate(UserModel user);
    }
}