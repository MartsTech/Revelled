namespace Persistence.Factories;

using Domain;
using Domain.Events;
using Domain.ValueObjects;
using System;

public sealed class EntityFactory : IEntityFactory
{
    public Event NewEvent(
        string title, DateTime date, string description,
        string category, string city, string venue, Guid? id = null)
    {
        return new Event(
            new EventId(id ?? Guid.NewGuid()), title, date,
            description, category, city, venue);
    }
}