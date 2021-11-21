namespace Domain
{
    public class AppUser : IdentityUser
    {
        public ICollection<EventAttendee> Events { get; set; }
    }
}
