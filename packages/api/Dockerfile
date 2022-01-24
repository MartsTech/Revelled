FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
ENV ASPNETCORE_URLS=http://+:5000
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy all the layers' csproj files into respective folders
COPY ["src/API/API.csproj", "src/API/"]
COPY ["src/Application/Application.csproj", "src/Application/"]
COPY ["src/Domain/Domain.csproj", "src/Domain/"]
COPY ["src/Infrastructure/Infrastructure.csproj", "src/Infrastructure/"]
COPY ["src/Persistence/Persistence.csproj", "src/Persistence/"]

# Run restore over API project - this pulls restore over the dependent projects as well
RUN dotnet restore "src/API/API.csproj"

COPY . .

# Run build over the API project
WORKDIR "/src/src/API"
RUN dotnet build "API.csproj" -c Release -o /app/build

# Run publish over the API project
FROM build AS publish
RUN dotnet publish "API.csproj" -c Release -o /app/publish

FROM base AS runtime
WORKDIR /app

COPY --from=publish /app/publish .
RUN ls -l
ENTRYPOINT ["dotnet", "API.dll"]