﻿namespace Application.Core
{
    public class MappingProfiles : AutoMapper.Profile
    {
        public MappingProfiles()
        {
            string currentUsername = null;

            CreateMap<Event, Event>();
            CreateMap<Event, EventDto>()
                .ForMember(d => d.HostUsername, o => o.MapFrom(e => e.Attendees
                    .FirstOrDefault(a => a.IsHost).User.UserName));
            CreateMap<EventAttendee, EventAttendeeDto>()
                .ForMember(d => d.Username, o => o.MapFrom(s => s.User.UserName))
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.User.DisplayName))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.User.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.User.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.User.Followings.Count))
                .ForMember(d => d.Following, 
                    o => o.MapFrom(s => s.User.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<User, Profiles.Profile>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(d => d.FollowersCount, o => o.MapFrom(s => s.Followers.Count))
                .ForMember(d => d.FollowingCount, o => o.MapFrom(s => s.Followings.Count))
                .ForMember(d => d.Following,
                    o => o.MapFrom(s => s.Followers.Any(x => x.Observer.UserName == currentUsername)));
            CreateMap<Comment, CommentDto>()
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.Author.DisplayName))
                .ForMember(d => d.Username, o => o.MapFrom(s => s.Author.UserName))
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Author.Photos.FirstOrDefault(x => x.IsMain).Url));
            CreateMap<EventAttendee, ProfileEventDto>()
               .ForMember(d => d.Id, o => o.MapFrom(s => s.Event.Id))
               .ForMember(d => d.Title, o => o.MapFrom(s => s.Event.Title))
               .ForMember(d => d.StartDate, o => o.MapFrom(s => s.Event.StartDate))
               .ForMember(d => d.EndDate, o => o.MapFrom(s => s.Event.EndDate))
               .ForMember(d => d.HostUsername, o => o.MapFrom(s =>
                    s.Event.Attendees.FirstOrDefault(x => x.IsHost).User.UserName));
        }
    }
}
