﻿namespace Domain.Photos;

using Domain.ValueObjects;

public interface IPhoto
{
    PhotoId PhotoId { get; }

    ProfileId ProfileId { get; }
}