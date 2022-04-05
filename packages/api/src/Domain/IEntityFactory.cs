namespace Domain;

using Domain.Events;

public interface IEntityFactory
{
    Event NewEvent(
        string title, DateTime date, string description,
        string category, string city, string venue);
}