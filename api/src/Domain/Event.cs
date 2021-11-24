namespace Domain
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsCancelled { get; set; }
        public ICollection<EventAttendee> Attendees { get; set; } = new List<EventAttendee>();
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
