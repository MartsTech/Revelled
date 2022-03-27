namespace Infrastructure.Security;

using Application.Services;
using Persistence;

public sealed class TestUserService : IUserService
{
    public string GetCurrentExternalUserId()
    {
        return SeedData.DefaultUserId;
    }
}