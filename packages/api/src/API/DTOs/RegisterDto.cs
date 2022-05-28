namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters.")]
        public string Password { get; set; }

        [Required]
        [MaxLength(25, ErrorMessage = "Username lenght must be shorter that 25.")]
        public string Username { get; set; }

        [Required]
        [MaxLength(25, ErrorMessage = "DisplayName lenght must be shorter that 25.")]
        public string DisplayName { get; set; }
    }
}
