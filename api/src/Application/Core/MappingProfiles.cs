namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Event, Event>();
            CreateMap<Event, EventDto>()
                .ForMember(d => d.HostUsername, o => o.MapFrom(e => e.Attendees
                    .FirstOrDefault(a => a.IsHost).AppUser.UserName));
            CreateMap<EventAttendee, Profiles.Profile>()
                .ForMember(p => p.Username, o => o.MapFrom(a => a.AppUser.UserName));
        }
    }
}
