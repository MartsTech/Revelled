﻿global using API.DTOs;
global using API.Extensions;
global using API.Middlewares;
global using API.Services;
global using Application.Core;
global using Application.Interfaces;
global using Domain;
global using FluentValidation.AspNetCore;
global using Infrastructure.Photos;
global using Infrastructure.Security;
global using MediatR;
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Mvc.Authorization;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.IdentityModel.Tokens;
global using Persistence;
global using System.ComponentModel.DataAnnotations;
global using System.IdentityModel.Tokens.Jwt;
global using System.Net;
global using System.Security.Claims;
global using System.Text.Json;
global using System.Text;