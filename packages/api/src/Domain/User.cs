﻿using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class User : IdentityUser
    {
        public string DisplayName { get; set; }
        public ICollection<EventAttendee> Events { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<UserFollowing> Followings { get; set; }
        public ICollection<UserFollowing> Followers { get; set; }
        public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    }
}
