namespace WebApi.UseCases.Accounts.External_Login;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

public class AccountsController : BaseApiController
{
    [HttpPost]
    [AllowAnonymous]
    [Route("account/external-login")]
    public IActionResult ExternalLogin(string provider, string returnUrl)
    {
    }
}