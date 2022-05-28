namespace Application.Profiles
{
    public class ProfileEventDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        [JsonIgnore]
        public string HostUsername { get; set; }
    }
}
