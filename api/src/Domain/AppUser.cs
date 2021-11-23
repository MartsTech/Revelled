namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public ICollection<EventAttendee> Events { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
