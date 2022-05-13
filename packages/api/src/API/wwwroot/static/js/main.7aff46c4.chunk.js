(this["webpackJsonpclient-app"] = this["webpackJsonpclient-app"] || []).push([
  [0],
  {
    313: function (e, t, n) {},
    500: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "history", function () {
          return yt;
        });
      var i = n(1),
        r = n(0),
        c = n(44),
        a = n.n(c),
        o = (n(309), n(310), n(311), n(312), n(313), n(522)),
        s = n(528),
        l = n(19),
        u = n(288),
        d = n(538),
        j = n(291),
        b = n(152),
        h = n(55),
        f = n(21),
        p = n(15),
        O = n.n(p),
        v = n(24),
        g = n(16),
        m = n(23),
        x = n(13),
        y = n(43),
        w = n.n(y),
        k = n(74),
        C = function e(t, n) {
          Object(g.a)(this, e),
            (this.data = void 0),
            (this.pagination = void 0),
            (this.data = t),
            (this.pagination = n);
        },
        A = function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
          Object(g.a)(this, e),
            (this.pageNumber = void 0),
            (this.pageSize = void 0),
            (this.pageNumber = t),
            (this.pageSize = n);
        };
      (w.a.defaults.baseURL = "/api"),
        w.a.interceptors.request.use(function (e) {
          var t = U.commonStore.token;
          return t && (e.headers.Authorization = "Bearer ".concat(t)), e;
        }),
        w.a.interceptors.response.use(
          (function () {
            var e = Object(v.a)(
              O.a.mark(function e(t) {
                var n;
                return O.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        e.next = 3;
                        break;
                      case 3:
                        if (!(n = t.headers.pagination)) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (t.data = new C(t.data, JSON.parse(n))),
                          e.abrupt("return", t)
                        );
                      case 7:
                        return e.abrupt("return", t);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          function (e) {
            var t,
              n = e.response,
              i = n.data,
              r = n.status,
              c = n.config,
              a = n.headers;
            switch (r) {
              case 400:
                if (
                  ("get" === c.method &&
                    i.errors.hasOwnProperty("id") &&
                    yt.push("/not-found"),
                  i.errors)
                ) {
                  var o = [];
                  for (var s in i.errors) i.errors[s] && o.push(i.errors[s]);
                  throw o.flat();
                }
                k.b.error(i);
                break;
              case 401:
                401 === r &&
                  (null === (t = a["www-authenticate"]) || void 0 === t
                    ? void 0
                    : t.startsWith('Bearer error="invalid_token"')) &&
                  (U.userStore.logout(),
                  k.b.error("Session expired - please login again"));
                break;
              case 404:
                yt.push("/not-found");
                break;
              case 500:
                U.commonStore.setServerError(i), yt.push("/server-error");
            }
            return Promise.reject(e);
          }
        );
      var S = function (e) {
          return e.data;
        },
        P = function (e) {
          return w.a.get(e).then(S);
        },
        T = function (e, t) {
          return w.a.post(e, t).then(S);
        },
        F = function (e, t) {
          return w.a.put(e, t).then(S);
        },
        I = function (e) {
          return w.a.delete(e).then(S);
        },
        L = {
          Activities: {
            list: function (e) {
              return w.a.get("/activities", { params: e }).then(S);
            },
            details: function (e) {
              return P("/activities/".concat(e));
            },
            create: function (e) {
              return T("/activities", e);
            },
            update: function (e) {
              return F("/activities/".concat(e.id), e);
            },
            delete: function (e) {
              return I("/activities/".concat(e));
            },
            attend: function (e) {
              return T("/activities/".concat(e, "/attend"), {});
            },
          },
          Account: {
            current: function () {
              return P("/account");
            },
            login: function (e) {
              return T("/account/login", e);
            },
            register: function (e) {
              return T("/account/register", e);
            },
            fbLogin: function (e) {
              return T("/account/fbLogin?accessToken=".concat(e), {});
            },
            refreshToken: function () {
              return T("/account/refreshToken", {});
            },
            verifyEmail: function (e, t) {
              return T(
                "/account/verifyEmail?token=".concat(e, "&email=").concat(t),
                {}
              );
            },
            resendEmailConfirm: function (e) {
              return P("/account/resendEmailConfirmationLink?email=".concat(e));
            },
          },
          Profiles: {
            get: function (e) {
              return P("/profiles/".concat(e));
            },
            uploadPhoto: function (e) {
              var t = new FormData();
              return (
                t.append("File", e),
                w.a.post("photos", t, {
                  headers: { "Content-type": "multipart/form-data" },
                })
              );
            },
            setMainPhoto: function (e) {
              return T("/photos/".concat(e, "/setMain"), {});
            },
            deletePhoto: function (e) {
              return I("/photos/".concat(e));
            },
            updateProfile: function (e) {
              return F("/profiles", e);
            },
            updateFollowing: function (e) {
              return T("/follow/".concat(e), {});
            },
            listFollowings: function (e, t) {
              return P("/follow/".concat(e, "?predicate=").concat(t));
            },
            listActivities: function (e, t) {
              return P(
                "/profiles/".concat(e, "/activities?predicate=").concat(t)
              );
            },
          },
        },
        E = function e(t) {
          Object(g.a)(this, e), Object.assign(this, t);
        },
        R = function e(t) {
          Object(g.a)(this, e),
            (this.id = void 0),
            (this.title = ""),
            (this.category = ""),
            (this.description = ""),
            (this.date = null),
            (this.city = ""),
            (this.venue = ""),
            t &&
              ((this.id = t.id),
              (this.title = t.title),
              (this.category = t.category),
              (this.description = t.description),
              (this.date = t.date),
              (this.venue = t.venue),
              (this.city = t.city));
        },
        M = n(502),
        N = function e(t) {
          Object(g.a)(this, e),
            (this.username = t.username),
            (this.displayName = t.displayName),
            (this.image = t.image);
        },
        D = (function () {
          function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.activityRegistry = new Map()),
              (this.selectedActivity = void 0),
              (this.editMode = !1),
              (this.loading = !1),
              (this.loadingInitial = !1),
              (this.pagination = null),
              (this.pagingParams = new A()),
              (this.predicate = new Map().set("all", !0)),
              (this.setPagingParams = function (e) {
                t.pagingParams = e;
              }),
              (this.setPredicate = function (e, n) {
                var i = function () {
                  t.predicate.forEach(function (e, n) {
                    "startDate" !== n && t.predicate.delete(n);
                  });
                };
                switch (e) {
                  case "all":
                    i(), t.predicate.set("all", !0);
                    break;
                  case "isGoing":
                    i(), t.predicate.set("isGoing", !0);
                    break;
                  case "isHost":
                    i(), t.predicate.set("isHost", !0);
                    break;
                  case "startDate":
                    t.predicate.delete("startDate"),
                      t.predicate.set("startDate", n);
                }
              }),
              (this.loadActivities = Object(v.a)(
                O.a.mark(function e() {
                  var n;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.loadingInitial = !0),
                              (e.prev = 1),
                              (e.next = 4),
                              L.Activities.list(t.axiosParams)
                            );
                          case 4:
                            (n = e.sent).data.forEach(function (e) {
                              t.setActivity(e);
                            }),
                              t.setPagination(n.pagination),
                              t.setLoadingInitial(!1),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              t.setLoadingInitial(!1);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              (this.setPagination = function (e) {
                t.pagination = e;
              }),
              (this.loadActivity = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(i = t.getActivity(n))) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (t.selectedActivity = i), e.abrupt("return", i)
                              );
                            case 6:
                              return (
                                (t.loadingInitial = !0),
                                (e.prev = 7),
                                (e.next = 10),
                                L.Activities.details(n)
                              );
                            case 10:
                              return (
                                (i = e.sent),
                                t.setActivity(i),
                                Object(x.e)(function () {
                                  t.selectedActivity = i;
                                }),
                                t.setLoadingInitial(!1),
                                e.abrupt("return", i)
                              );
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(7)),
                                console.log(e.t0),
                                t.setLoadingInitial(!1);
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[7, 17]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.setActivity = function (e) {
                var n,
                  i = U.userStore.user;
                i &&
                  ((e.isGoing = e.attendees.some(function (e) {
                    return e.username === i.username;
                  })),
                  (e.isHost = e.hostUsername === i.username),
                  (e.host =
                    null === (n = e.attendees) || void 0 === n
                      ? void 0
                      : n.find(function (t) {
                          return t.username === e.hostUsername;
                        })));
                (e.date = new Date(e.date)), t.activityRegistry.set(e.id, e);
              }),
              (this.getActivity = function (e) {
                return t.activityRegistry.get(e);
              }),
              (this.setLoadingInitial = function (e) {
                t.loadingInitial = e;
              }),
              (this.createActivity = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i, r, c;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = U.userStore.user),
                                (r = new N(i)),
                                (e.prev = 2),
                                (e.next = 5),
                                L.Activities.create(n)
                              );
                            case 5:
                              ((c = new E(n)).hostUsername = i.username),
                                (c.attendees = [r]),
                                t.setActivity(c),
                                Object(x.e)(function () {
                                  t.selectedActivity = c;
                                }),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(2)),
                                console.log(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 12]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.updateActivity = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                L.Activities.update(n)
                              );
                            case 3:
                              Object(x.e)(function () {
                                if (n.id) {
                                  var e = Object(f.a)(
                                    Object(f.a)({}, t.getActivity(n.id)),
                                    n
                                  );
                                  t.activityRegistry.set(n.id, e),
                                    (t.selectedActivity = e);
                                }
                              }),
                                (e.next = 9);
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.deleteActivity = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Activities.delete(n)
                              );
                            case 4:
                              Object(x.e)(function () {
                                t.activityRegistry.delete(n), (t.loading = !1);
                              }),
                                (e.next = 11);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  t.loading = !1;
                                });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.updateAttendance = Object(v.a)(
                O.a.mark(function e() {
                  var n;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = U.userStore.user),
                              (t.loading = !0),
                              (e.prev = 2),
                              (e.next = 5),
                              L.Activities.attend(t.selectedActivity.id)
                            );
                          case 5:
                            Object(x.e)(function () {
                              var e;
                              if (
                                null === (e = t.selectedActivity) ||
                                void 0 === e
                                  ? void 0
                                  : e.isGoing
                              ) {
                                var i;
                                (t.selectedActivity.attendees =
                                  null === (i = t.selectedActivity.attendees) ||
                                  void 0 === i
                                    ? void 0
                                    : i.filter(function (e) {
                                        return (
                                          e.username !==
                                          (null === n || void 0 === n
                                            ? void 0
                                            : n.username)
                                        );
                                      })),
                                  (t.selectedActivity.isGoing = !1);
                              } else {
                                var r,
                                  c,
                                  a = new N(n);
                                null === (r = t.selectedActivity) ||
                                  void 0 === r ||
                                  null === (c = r.attendees) ||
                                  void 0 === c ||
                                  c.push(a),
                                  (t.selectedActivity.isGoing = !0);
                              }
                              t.activityRegistry.set(
                                t.selectedActivity.id,
                                t.selectedActivity
                              );
                            }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(2)),
                              console.log(e.t0);
                          case 11:
                            return (
                              (e.prev = 11),
                              Object(x.e)(function () {
                                return (t.loading = !1);
                              }),
                              e.finish(11)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 8, 11, 14]]
                  );
                })
              )),
              (this.cancelActivityToggle = Object(v.a)(
                O.a.mark(function e() {
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.loading = !0),
                              (e.prev = 1),
                              (e.next = 4),
                              L.Activities.attend(t.selectedActivity.id)
                            );
                          case 4:
                            Object(x.e)(function () {
                              var e;
                              (t.selectedActivity.isCancelled = !(null ===
                                (e = t.selectedActivity) || void 0 === e
                                ? void 0
                                : e.isCancelled)),
                                t.activityRegistry.set(
                                  t.selectedActivity.id,
                                  t.selectedActivity
                                );
                            }),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 10:
                            return (
                              (e.prev = 10),
                              Object(x.e)(function () {
                                return (t.loading = !1);
                              }),
                              e.finish(10)
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7, 10, 13]]
                  );
                })
              )),
              (this.updateAttendeeFollowing = function (e) {
                t.activityRegistry.forEach(function (t) {
                  t.attendees.forEach(function (t) {
                    t.username === e &&
                      (t.following ? t.followersCount-- : t.followersCount++,
                      (t.following = !t.following));
                  });
                });
              }),
              (this.clearSelectedActivity = function () {
                t.selectedActivity = void 0;
              }),
              Object(x.c)(this),
              Object(x.d)(
                function () {
                  return t.predicate.keys();
                },
                function () {
                  (t.pagingParams = new A()),
                    t.activityRegistry.clear(),
                    t.loadActivities();
                }
              );
          }
          return (
            Object(m.a)(e, [
              {
                key: "axiosParams",
                get: function () {
                  var e = new URLSearchParams();
                  return (
                    e.append(
                      "pageNumber",
                      this.pagingParams.pageNumber.toString()
                    ),
                    e.append("pageSize", this.pagingParams.pageSize.toString()),
                    this.predicate.forEach(function (t, n) {
                      "startDate" === n
                        ? e.append(n, t.toISOString())
                        : e.append(n, t);
                    }),
                    e
                  );
                },
              },
              {
                key: "activitiesByDate",
                get: function () {
                  return Array.from(this.activityRegistry.values()).sort(
                    function (e, t) {
                      return e.date.getTime() - t.date.getTime();
                    }
                  );
                },
              },
              {
                key: "groupedActivities",
                get: function () {
                  return Object.entries(
                    this.activitiesByDate.reduce(function (e, t) {
                      var n = Object(M.default)(t.date, "dd MMM yyyy");
                      return (
                        (e[n] = e[n] ? [].concat(Object(h.a)(e[n]), [t]) : [t]),
                        e
                      );
                    }, {})
                  );
                },
              },
            ]),
            e
          );
        })(),
        z = n(226),
        G = (function () {
          function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.profile = null),
              (this.loadingProfile = !1),
              (this.uploading = !1),
              (this.loading = !1),
              (this.followings = []),
              (this.loadingFollowings = !1),
              (this.activeTab = 0),
              (this.userActivities = []),
              (this.loadingActivities = !1),
              (this.setActiveTab = function (e) {
                t.activeTab = e;
              }),
              (this.loadProfile = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loadingProfile = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.get(n)
                              );
                            case 4:
                              (i = e.sent),
                                Object(x.e)(function () {
                                  (t.profile = i), (t.loadingProfile = !1);
                                }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  return (t.loadingProfile = !1);
                                });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.uploadPhoto = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i, r;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.uploading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.uploadPhoto(n)
                              );
                            case 4:
                              (i = e.sent),
                                (r = i.data),
                                Object(x.e)(function () {
                                  var e;
                                  t.profile &&
                                    (null === (e = t.profile.photos) ||
                                      void 0 === e ||
                                      e.push(r),
                                    r.isMain &&
                                      U.userStore.user &&
                                      (U.userStore.setImage(r.url),
                                      (t.profile.image = r.url)));
                                  t.uploading = !1;
                                }),
                                (e.next = 13);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  return (t.uploading = !1);
                                });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.setMainPhoto = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.setMainPhoto(n.id)
                              );
                            case 4:
                              U.userStore.setImage(n.url),
                                Object(x.e)(function () {
                                  t.profile &&
                                    t.profile.photos &&
                                    ((t.profile.photos.find(function (e) {
                                      return e.isMain;
                                    }).isMain = !1),
                                    (t.profile.photos.find(function (e) {
                                      return e.id === n.id;
                                    }).isMain = !0),
                                    (t.profile.image = n.url),
                                    (t.loading = !1));
                                }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                Object(x.e)(function () {
                                  return (t.loading = !1);
                                }),
                                console.log(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.deletePhoto = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.deletePhoto(n.id)
                              );
                            case 4:
                              Object(x.e)(function () {
                                var e;
                                t.profile &&
                                  ((t.profile.photos =
                                    null === (e = t.profile.photos) ||
                                    void 0 === e
                                      ? void 0
                                      : e.filter(function (e) {
                                          return e.id !== n.id;
                                        })),
                                  (t.loading = !1));
                              }),
                                (e.next = 11);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                Object(x.e)(function () {
                                  return (t.loading = !1);
                                }),
                                console.log(e.t0);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.updateProfile = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.updateProfile(n)
                              );
                            case 4:
                              Object(x.e)(function () {
                                var e;
                                n.displayName &&
                                  n.displayName !==
                                    (null === (e = U.userStore.user) ||
                                    void 0 === e
                                      ? void 0
                                      : e.displayName) &&
                                  U.userStore.setDisplayName(n.displayName),
                                  (t.profile = Object(f.a)(
                                    Object(f.a)({}, t.profile),
                                    n
                                  )),
                                  (t.loading = !1);
                              }),
                                (e.next = 11);
                              break;
                            case 7:
                              (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  return (t.loading = !1);
                                });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.updateFollowing = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n, i) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loading = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.updateFollowing(n)
                              );
                            case 4:
                              U.activityStore.updateAttendeeFollowing(n),
                                Object(x.e)(function () {
                                  var e, r;
                                  t.profile &&
                                    t.profile.username !==
                                      (null === (e = U.userStore.user) ||
                                      void 0 === e
                                        ? void 0
                                        : e.username) &&
                                    t.profile.username === n &&
                                    (i
                                      ? t.profile.followersCount++
                                      : t.profile.followersCount--,
                                    (t.profile.following =
                                      !t.profile.following)),
                                    t.profile &&
                                      t.profile.username ===
                                        (null === (r = U.userStore.user) ||
                                        void 0 === r
                                          ? void 0
                                          : r.username) &&
                                      (i
                                        ? t.profile.followingCount++
                                        : t.profile.followingCount--),
                                    t.followings.forEach(function (e) {
                                      e.username === n &&
                                        (e.following
                                          ? e.followersCount--
                                          : e.followersCount++,
                                        (e.following = !e.following));
                                    }),
                                    (t.loading = !1);
                                }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  return (t.loading = !1);
                                });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.loadFollowings = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loadingFollowings = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.listFollowings(t.profile.username, n)
                              );
                            case 4:
                              (i = e.sent),
                                Object(x.e)(function () {
                                  (t.followings = i),
                                    (t.loadingFollowings = !1);
                                }),
                                (e.next = 11);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                Object(x.e)(function () {
                                  return (t.loadingFollowings = !1);
                                });
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.loadUserActivities = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n, i) {
                    var r;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t.loadingActivities = !0),
                                (e.prev = 1),
                                (e.next = 4),
                                L.Profiles.listActivities(n, i)
                              );
                            case 4:
                              (r = e.sent),
                                Object(x.e)(function () {
                                  (t.userActivities = r),
                                    (t.loadingActivities = !1);
                                }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0),
                                Object(x.e)(function () {
                                  t.loadingActivities = !1;
                                });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })()),
              Object(x.c)(this),
              Object(x.d)(
                function () {
                  return t.activeTab;
                },
                function (e) {
                  if (3 === e || 4 === e) {
                    var n = 3 === e ? "followers" : "following";
                    t.loadFollowings(n);
                  } else t.followings = [];
                }
              );
          }
          return (
            Object(m.a)(e, [
              {
                key: "isCurrentUser",
                get: function () {
                  return (
                    !(!U.userStore.user || !this.profile) &&
                    U.userStore.user.username === this.profile.username
                  );
                },
              },
            ]),
            e
          );
        })(),
        H = (function () {
          function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.user = null),
              (this.fbAccessToken = null),
              (this.fbLoading = !1),
              (this.refreshTokenTimeout = void 0),
              (this.login = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), (e.next = 3), L.Account.login(n)
                              );
                            case 3:
                              (i = e.sent),
                                U.commonStore.setToken(i.token),
                                t.startRefreshTokenTimer(i),
                                Object(x.e)(function () {
                                  return (t.user = i);
                                }),
                                yt.push("/activities"),
                                U.modalStore.closeModal(),
                                (e.next = 14);
                              break;
                            case 11:
                              throw ((e.prev = 11), (e.t0 = e.catch(0)), e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 11]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.logout = function () {
                U.commonStore.setToken(null),
                  window.localStorage.removeItem("jwt"),
                  (t.user = null),
                  yt.push("/");
              }),
              (this.getUser = Object(v.a)(
                O.a.mark(function e() {
                  var n;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), L.Account.current()
                            );
                          case 3:
                            (n = e.sent),
                              U.commonStore.setToken(n.token),
                              Object(x.e)(function () {
                                return (t.user = n);
                              }),
                              t.startRefreshTokenTimer(n),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              (this.register = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(t) {
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                L.Account.register(t)
                              );
                            case 3:
                              yt.push(
                                "/account/registerSuccess?email=".concat(
                                  t.email
                                )
                              ),
                                U.modalStore.closeModal(),
                                (e.next = 10);
                              break;
                            case 7:
                              throw ((e.prev = 7), (e.t0 = e.catch(0)), e.t0);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (this.setImage = function (e) {
                t.user && (t.user.image = e);
              }),
              (this.setDisplayName = function (e) {
                t.user && (t.user.displayName = e);
              }),
              (this.getFacebookLoginStatus = Object(v.a)(
                O.a.mark(function e() {
                  return O.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          window.FB.getLoginStatus(function (e) {
                            "connected" === e.status &&
                              (t.fbAccessToken = e.authResponse.accessToken);
                          });
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.facebookLogin = function () {
                t.fbLoading = !0;
                var e = function (e) {
                  L.Account.fbLogin(e)
                    .then(function (e) {
                      U.commonStore.setToken(e.token),
                        t.startRefreshTokenTimer(e),
                        Object(x.e)(function () {
                          (t.user = e), (t.fbLoading = !1);
                        }),
                        yt.push("/activities");
                    })
                    .catch(function (e) {
                      console.log(e),
                        Object(x.e)(function () {
                          return (t.fbLoading = !1);
                        });
                    });
                };
                t.fbAccessToken
                  ? e(t.fbAccessToken)
                  : window.FB.login(
                      function (t) {
                        e(t.authResponse.accessToken);
                      },
                      { scope: "public_profile,email" }
                    );
              }),
              (this.refreshToken = Object(v.a)(
                O.a.mark(function e() {
                  var n;
                  return O.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.stopRefreshTokenTimer(),
                              (e.prev = 1),
                              (e.next = 4),
                              L.Account.refreshToken()
                            );
                          case 4:
                            (n = e.sent),
                              Object(x.e)(function () {
                                return (t.user = n);
                              }),
                              U.commonStore.setToken(n.token),
                              t.startRefreshTokenTimer(n),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              )),
              Object(x.c)(this);
          }
          return (
            Object(m.a)(e, [
              {
                key: "startRefreshTokenTimer",
                value: function (e) {
                  var t = JSON.parse(atob(e.token.split(".")[1])),
                    n = new Date(1e3 * t.exp).getTime() - Date.now() - 6e4;
                  this.refreshTokenTimeout = setTimeout(this.refreshToken, n);
                },
              },
              {
                key: "stopRefreshTokenTimer",
                value: function () {
                  clearTimeout(this.refreshTokenTimeout);
                },
              },
              {
                key: "isLoggedIn",
                get: function () {
                  return !!this.user;
                },
              },
            ]),
            e
          );
        })(),
        U = {
          activityStore: new D(),
          commonStore: new (function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.error = null),
              (this.token = window.localStorage.getItem("jwt")),
              (this.appLoaded = !1),
              (this.setServerError = function (e) {
                t.error = e;
              }),
              (this.setToken = function (e) {
                t.token = e;
              }),
              (this.setAppLoaded = function () {
                t.appLoaded = !0;
              }),
              Object(x.c)(this),
              Object(x.d)(
                function () {
                  return t.token;
                },
                function (e) {
                  e
                    ? window.localStorage.setItem("jwt", e)
                    : window.localStorage.removeItem("jwt");
                }
              );
          })(),
          userStore: new H(),
          modalStore: new (function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.modal = { open: !1, body: null }),
              (this.openModal = function (e) {
                (t.modal.open = !0), (t.modal.body = e);
              }),
              (this.closeModal = function () {
                (t.modal.open = !1), (t.modal.body = null);
              }),
              Object(x.c)(this);
          })(),
          profileStore: new G(),
          commentStore: new (function e() {
            var t = this;
            Object(g.a)(this, e),
              (this.comments = []),
              (this.hubConnection = null),
              (this.createHubConnection = function (e) {
                U.activityStore.selectedActivity &&
                  ((t.hubConnection = new z.a()
                    .withUrl("/chat?activityId=" + e, {
                      accessTokenFactory: function () {
                        var e;
                        return null === (e = U.userStore.user) || void 0 === e
                          ? void 0
                          : e.token;
                      },
                    })
                    .withAutomaticReconnect()
                    .configureLogging(z.b.Information)
                    .build()),
                  t.hubConnection.start().catch(function (e) {
                    return console.log(
                      "Error establishing the connection: ",
                      e
                    );
                  }),
                  t.hubConnection.on("LoadComments", function (e) {
                    Object(x.e)(function () {
                      e.forEach(function (e) {
                        e.createdAt = new Date(e.createdAt + "Z");
                      }),
                        (t.comments = e);
                    });
                  }),
                  t.hubConnection.on("ReceiveComment", function (e) {
                    Object(x.e)(function () {
                      (e.createdAt = new Date(e.createdAt)),
                        t.comments.unshift(e);
                    });
                  }));
              }),
              (this.stopHubConnection = function () {
                var e;
                null === (e = t.hubConnection) ||
                  void 0 === e ||
                  e.stop().catch(function (e) {
                    return console.log("Error stopping connection: ", e);
                  });
              }),
              (this.clearComments = function () {
                (t.comments = []), t.stopHubConnection();
              }),
              (this.addComment = (function () {
                var e = Object(v.a)(
                  O.a.mark(function e(n) {
                    var i, r;
                    return O.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n.activityId =
                                  null ===
                                    (i = U.activityStore.selectedActivity) ||
                                  void 0 === i
                                    ? void 0
                                    : i.id),
                                (e.prev = 1),
                                (e.next = 4),
                                null === (r = t.hubConnection) || void 0 === r
                                  ? void 0
                                  : r.invoke("SendComment", n)
                              );
                            case 4:
                              e.next = 9;
                              break;
                            case 6:
                              (e.prev = 6),
                                (e.t0 = e.catch(1)),
                                console.log(e.t0);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 6]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              Object(x.c)(this);
          })(),
        },
        V = Object(r.createContext)(U);
      function q() {
        return Object(r.useContext)(V);
      }
      var B = Object(s.a)(function () {
          var e = q().userStore,
            t = e.user,
            n = e.logout,
            r = e.isLoggedIn;
          return Object(i.jsx)(u.a, {
            inverted: !0,
            fixed: "top",
            children: Object(i.jsxs)(o.a, {
              children: [
                Object(i.jsxs)(u.a.Item, {
                  as: l.b,
                  exact: !0,
                  to: "/",
                  header: !0,
                  children: [
                    Object(i.jsx)("img", {
                      src: "/assets/logo.png",
                      alt: "logo",
                      style: { marginRight: "10px" },
                    }),
                    "Revelled",
                  ],
                }),
                r &&
                  Object(i.jsxs)(i.Fragment, {
                    children: [
                      Object(i.jsx)(u.a.Item, {
                        as: l.b,
                        to: "/activities",
                        name: "Activities",
                      }),
                      Object(i.jsx)(u.a.Item, {
                        as: l.b,
                        to: "/errors",
                        name: "Errors",
                      }),
                      Object(i.jsx)(u.a.Item, {
                        children: Object(i.jsx)(d.a, {
                          as: l.b,
                          to: "/createActivity",
                          positive: !0,
                          content: "Create Activity",
                        }),
                      }),
                      Object(i.jsxs)(u.a.Item, {
                        position: "right",
                        children: [
                          Object(i.jsx)(j.a, {
                            src:
                              (null === t || void 0 === t ? void 0 : t.image) ||
                              "/assets/user.png",
                            avatar: !0,
                            spaced: "right",
                          }),
                          Object(i.jsx)(b.a, {
                            pointing: "top left",
                            text:
                              null === t || void 0 === t
                                ? void 0
                                : t.displayName,
                            children: Object(i.jsxs)(b.a.Menu, {
                              children: [
                                Object(i.jsx)(b.a.Item, {
                                  as: l.a,
                                  to: "/profiles/".concat(
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.username
                                  ),
                                  text: "My Profile",
                                  icon: "user",
                                }),
                                Object(i.jsx)(b.a.Item, {
                                  onClick: n,
                                  text: "Logout",
                                  icon: "power",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        }),
        J = n(22),
        K = n(275),
        W = n.n(K),
        Y = n(292),
        _ = n(523),
        Z = n(287),
        Q = n(542),
        X = Object(s.a)(function () {
          var e = q().activityStore,
            t = e.predicate,
            n = e.setPredicate;
          return Object(i.jsxs)(i.Fragment, {
            children: [
              Object(i.jsxs)(u.a, {
                vertical: !0,
                size: "large",
                style: { width: "100%", marginTop: 25 },
                children: [
                  Object(i.jsx)(Q.a, {
                    icon: "filter",
                    attached: !0,
                    color: "teal",
                    content: "Filters",
                  }),
                  Object(i.jsx)(u.a.Item, {
                    content: "All Activites",
                    active: t.has("all"),
                    onClick: function () {
                      return n("all", "true");
                    },
                  }),
                  Object(i.jsx)(u.a.Item, {
                    content: "I'm going",
                    active: t.has("isGoing"),
                    onClick: function () {
                      return n("isGoing", "true");
                    },
                  }),
                  Object(i.jsx)(u.a.Item, {
                    content: "I'm hosting",
                    active: t.has("isHost"),
                    onClick: function () {
                      return n("isHost", "true");
                    },
                  }),
                ],
              }),
              Object(i.jsx)(Q.a, {}),
              Object(i.jsx)(Z.a, {
                onChange: function (e) {
                  return n("startDate", e);
                },
                value: t.get("startDate") || new Date(),
              }),
            ],
          });
        }),
        $ = n(227),
        ee = n(189),
        te = n(530),
        ne = n(94),
        ie = n(531),
        re = n(526),
        ce = n(534),
        ae = n(544),
        oe = Object(s.a)(function (e) {
          var t,
            n = e.profile,
            r = q(),
            c = r.profileStore,
            a = r.userStore,
            o = c.updateFollowing,
            s = c.loading;
          if (
            (null === (t = a.user) || void 0 === t ? void 0 : t.username) ===
            n.username
          )
            return null;
          return Object(i.jsxs)(ae.a, {
            animated: "move",
            children: [
              Object(i.jsx)(ae.a.Content, {
                visible: !0,
                style: { width: "100%" },
                children: Object(i.jsx)(d.a, {
                  fluid: !0,
                  color: "teal",
                  content: n.following ? "Following" : "Not following",
                }),
              }),
              Object(i.jsx)(ae.a.Content, {
                hidden: !0,
                style: { width: "100%" },
                children: Object(i.jsx)(d.a, {
                  fluid: !0,
                  basic: !0,
                  color: n.following ? "red" : "green",
                  content: n.following ? "Unfollow" : "Follow",
                  loading: s,
                  onClick: function (e) {
                    return (function (e, t) {
                      e.preventDefault(), n.following ? o(t, !1) : o(t, !0);
                    })(e, n.username);
                  },
                }),
              }),
            ],
          });
        }),
        se = Object(s.a)(function (e) {
          var t = e.profile;
          return Object(i.jsxs)(ce.a, {
            as: l.a,
            to: "/profiles/".concat(t.username),
            children: [
              Object(i.jsx)(j.a, { src: t.image || "/assets/user.png" }),
              Object(i.jsxs)(ce.a.Content, {
                children: [
                  Object(i.jsx)(ce.a.Header, { children: t.displayName }),
                  Object(i.jsx)(ce.a.Description, {
                    children: (function (e) {
                      if (e)
                        return e.length > 40 ? e.substring(0, 37) + "..." : e;
                    })(t.bio),
                  }),
                ],
              }),
              Object(i.jsxs)(ce.a.Content, {
                extra: !0,
                children: [
                  Object(i.jsx)(ne.a, { name: "user" }),
                  t.followersCount,
                  " followers",
                ],
              }),
              Object(i.jsx)(oe, { profile: t }),
            ],
          });
        }),
        le = Object(s.a)(function (e) {
          var t = e.attendees,
            n = { borderColor: "orange", borderWidth: 2 };
          return Object(i.jsx)(ie.a, {
            horizontal: !0,
            children: t.map(function (e) {
              return Object(i.jsx)(
                re.a,
                {
                  hoverable: !0,
                  trigger: Object(i.jsx)(
                    ie.a.Item,
                    {
                      as: l.a,
                      to: "/profiles/".concat(e.username),
                      children: Object(i.jsx)(j.a, {
                        size: "mini",
                        circular: !0,
                        src: e.image || "/assets/user.png",
                        bordered: !0,
                        style: e.following ? n : null,
                      }),
                    },
                    e.username
                  ),
                  children: Object(i.jsx)(re.a.Content, {
                    children: Object(i.jsx)(se, { profile: e }),
                  }),
                },
                e.username
              );
            }),
          });
        });
      function ue(e) {
        var t,
          n,
          r = e.activity;
        return Object(i.jsxs)($.a.Group, {
          children: [
            Object(i.jsxs)($.a, {
              children: [
                r.isCancelled &&
                  Object(i.jsx)(ee.a, {
                    attached: "top",
                    color: "red",
                    content: "Cancelled",
                    style: { textAlign: "center" },
                  }),
                Object(i.jsx)(te.a.Group, {
                  children: Object(i.jsxs)(te.a, {
                    children: [
                      Object(i.jsx)(te.a.Image, {
                        style: { marginBottom: 3 },
                        size: "tiny",
                        circular: !0,
                        src:
                          (null === (t = r.host) || void 0 === t
                            ? void 0
                            : t.image) || "/assets/user.png",
                      }),
                      Object(i.jsxs)(te.a.Content, {
                        children: [
                          Object(i.jsx)(te.a.Header, {
                            as: l.a,
                            to: "/activities/".concat(r.id),
                            children: r.title,
                          }),
                          Object(i.jsxs)(te.a.Description, {
                            children: [
                              "Hosted by ",
                              Object(i.jsx)(l.a, {
                                to: "/profiles/".concat(r.hostUsername),
                                children:
                                  null === (n = r.host) || void 0 === n
                                    ? void 0
                                    : n.displayName,
                              }),
                            ],
                          }),
                          r.isHost &&
                            Object(i.jsx)(te.a.Description, {
                              children: Object(i.jsx)(ee.a, {
                                basic: !0,
                                color: "orange",
                                children: "You are hosting this activity",
                              }),
                            }),
                          r.isGoing &&
                            !r.isHost &&
                            Object(i.jsx)(te.a.Description, {
                              children: Object(i.jsx)(ee.a, {
                                basic: !0,
                                color: "green",
                                children: "You are going to this activity",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            Object(i.jsx)($.a, {
              children: Object(i.jsxs)("span", {
                children: [
                  Object(i.jsx)(ne.a, { name: "clock" }),
                  " ",
                  Object(M.default)(r.date, "dd MMM yyyy h:mm aa"),
                  Object(i.jsx)(ne.a, { name: "marker" }),
                  " ",
                  r.venue,
                ],
              }),
            }),
            Object(i.jsx)($.a, {
              secondary: !0,
              children: Object(i.jsx)(le, { attendees: r.attendees }),
            }),
            Object(i.jsxs)($.a, {
              clearing: !0,
              children: [
                Object(i.jsx)("span", { children: r.description }),
                Object(i.jsx)(d.a, {
                  as: l.a,
                  to: "/activities/".concat(r.id),
                  color: "teal",
                  floated: "right",
                  content: "View",
                }),
              ],
            }),
          ],
        });
      }
      var de = Object(s.a)(function () {
          var e = q().activityStore.groupedActivities;
          return Object(i.jsx)(i.Fragment, {
            children: e.map(function (e) {
              var t = Object(J.a)(e, 2),
                n = t[0],
                c = t[1];
              return Object(i.jsxs)(
                r.Fragment,
                {
                  children: [
                    Object(i.jsx)(Q.a, { sub: !0, color: "teal", children: n }),
                    c.map(function (e) {
                      return Object(i.jsx)(ue, { activity: e }, e.id);
                    }),
                  ],
                },
                n
              );
            }),
          });
        }),
        je = n(535);
      function be() {
        return Object(i.jsx)(r.Fragment, {
          children: Object(i.jsx)(je.a, {
            fluid: !0,
            style: { marginTop: 25 },
            children: Object(i.jsxs)($.a.Group, {
              children: [
                Object(i.jsx)($.a, {
                  style: { minHeight: 110 },
                  children: Object(i.jsxs)(je.a, {
                    children: [
                      Object(i.jsxs)(je.a.Header, {
                        image: !0,
                        children: [
                          Object(i.jsx)(je.a.Line, {}),
                          Object(i.jsx)(je.a.Line, {}),
                        ],
                      }),
                      Object(i.jsx)(je.a.Paragraph, {
                        children: Object(i.jsx)(je.a.Line, {}),
                      }),
                    ],
                  }),
                }),
                Object(i.jsx)($.a, {
                  children: Object(i.jsxs)(je.a, {
                    children: [
                      Object(i.jsx)(je.a.Line, {}),
                      Object(i.jsx)(je.a.Line, {}),
                    ],
                  }),
                }),
                Object(i.jsx)($.a, { secondary: !0, style: { minHeight: 70 } }),
                Object(i.jsx)($.a, {
                  clearing: !0,
                  children: Object(i.jsx)(d.a, {
                    disabled: !0,
                    color: "blue",
                    floated: "right",
                    content: "View",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var he = Object(s.a)(function () {
          var e = q().activityStore,
            t = e.loadActivities,
            n = e.activityRegistry,
            c = e.setPagingParams,
            a = e.pagination,
            o = Object(r.useState)(!1),
            s = Object(J.a)(o, 2),
            l = s[0],
            u = s[1];
          return (
            Object(r.useEffect)(
              function () {
                n.size <= 1 && t();
              },
              [n.size, t]
            ),
            Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsx)(Y.a.Column, {
                  width: "10",
                  children:
                    e.loadingInitial && !l
                      ? Object(i.jsxs)(i.Fragment, {
                          children: [
                            Object(i.jsx)(be, {}),
                            Object(i.jsx)(be, {}),
                          ],
                        })
                      : Object(i.jsx)(W.a, {
                          pageStart: 0,
                          loadMore: function () {
                            u(!0),
                              c(new A(a.currentPage + 1)),
                              t().then(function () {
                                return u(!1);
                              });
                          },
                          hasMore: !l && !!a && a.currentPage < a.totalPages,
                          initialLoad: !1,
                          children: Object(i.jsx)(de, {}),
                        }),
                }),
                Object(i.jsx)(Y.a.Column, {
                  width: "6",
                  children: Object(i.jsx)(X, {}),
                }),
                Object(i.jsx)(Y.a.Column, {
                  width: 10,
                  children: Object(i.jsx)(_.a, { active: l }),
                }),
              ],
            })
          );
        }),
        fe = n(31),
        pe = n(525),
        Oe = n(26),
        ve = n(527);
      function ge(e) {
        var t = Object(Oe.e)(e.name),
          n = Object(J.a)(t, 2),
          r = n[0],
          c = n[1];
        return Object(i.jsxs)(ve.a.Field, {
          error: c.touched && !!c.error,
          children: [
            Object(i.jsx)("label", { children: e.label }),
            Object(i.jsx)("input", Object(f.a)(Object(f.a)({}, r), e)),
            c.touched && c.error
              ? Object(i.jsx)(ee.a, {
                  basic: !0,
                  color: "red",
                  children: c.error,
                })
              : null,
          ],
        });
      }
      var me = Object(s.a)(function () {
          var e = q().userStore;
          return Object(i.jsx)(Oe.d, {
            initialValues: { email: "", password: "", error: null },
            onSubmit: function (t, n) {
              var i = n.setErrors;
              return e.login(t).catch(function (e) {
                return i({ error: e.response.data });
              });
            },
            children: function (e) {
              var t = e.handleSubmit,
                n = e.isSubmitting,
                r = e.errors;
              return Object(i.jsxs)(Oe.c, {
                className: "ui form",
                onSubmit: t,
                autoComplete: "off",
                children: [
                  Object(i.jsx)(Q.a, {
                    as: "h2",
                    content: "Login to Revelled",
                    color: "teal",
                    textAlign: "center",
                  }),
                  Object(i.jsx)(ge, { name: "email", placeholder: "Email" }),
                  Object(i.jsx)(ge, {
                    name: "password",
                    placeholder: "Password",
                    type: "password",
                  }),
                  Object(i.jsx)(Oe.a, {
                    name: "error",
                    render: function () {
                      return Object(i.jsx)(ee.a, {
                        style: { marginBottom: 10 },
                        basic: !0,
                        color: "red",
                        content: r.error,
                      });
                    },
                  }),
                  Object(i.jsx)(d.a, {
                    loading: n,
                    positive: !0,
                    content: "Login",
                    type: "submit",
                    fluid: !0,
                  }),
                ],
              });
            },
          });
        }),
        xe = n(35),
        ye = n(536);
      function we(e) {
        var t = e.errors;
        return Object(i.jsx)(ye.a, {
          error: !0,
          children:
            t &&
            Object(i.jsx)(ye.a.List, {
              children: t.map(function (e, t) {
                return Object(i.jsx)(ye.a.Item, { children: e }, t);
              }),
            }),
        });
      }
      var ke = Object(s.a)(function () {
          var e = q().userStore;
          return Object(i.jsx)(Oe.d, {
            initialValues: {
              displayName: "",
              username: "",
              email: "",
              password: "",
              error: null,
            },
            onSubmit: function (t, n) {
              var i = n.setErrors;
              return e.register(t).catch(function (e) {
                return i({ error: e });
              });
            },
            validationSchema: xe.a({
              displayName: xe.b().required(),
              username: xe.b().required(),
              email: xe.b().required().email(),
              password: xe.b().required(),
            }),
            children: function (e) {
              var t = e.handleSubmit,
                n = e.isSubmitting,
                r = e.errors,
                c = e.isValid,
                a = e.dirty;
              return Object(i.jsxs)(Oe.c, {
                className: "ui form error",
                onSubmit: t,
                autoComplete: "off",
                children: [
                  Object(i.jsx)(Q.a, {
                    as: "h2",
                    content: "Sign up to Revelled",
                    color: "teal",
                    textAlign: "center",
                  }),
                  Object(i.jsx)(ge, {
                    name: "displayName",
                    placeholder: "Display Name",
                  }),
                  Object(i.jsx)(ge, {
                    name: "username",
                    placeholder: "Username",
                  }),
                  Object(i.jsx)(ge, { name: "email", placeholder: "Email" }),
                  Object(i.jsx)(ge, {
                    name: "password",
                    placeholder: "Password",
                    type: "password",
                  }),
                  Object(i.jsx)(Oe.a, {
                    name: "error",
                    render: function () {
                      return Object(i.jsx)(we, { errors: r.error });
                    },
                  }),
                  Object(i.jsx)(d.a, {
                    disabled: !c || !a || n,
                    loading: n,
                    positive: !0,
                    content: "Register",
                    type: "submit",
                    fluid: !0,
                  }),
                ],
              });
            },
          });
        }),
        Ce = Object(s.a)(function () {
          var e = q(),
            t = e.userStore,
            n = e.modalStore;
          return Object(i.jsx)($.a, {
            inverted: !0,
            textAlign: "center",
            vertical: !0,
            className: "masthead",
            children: Object(i.jsxs)(o.a, {
              text: !0,
              children: [
                Object(i.jsxs)(Q.a, {
                  as: "h1",
                  inverted: !0,
                  children: [
                    Object(i.jsx)(j.a, {
                      size: "massive",
                      src: "/assets/logo.png",
                      alt: "logo",
                      style: { marginBottom: 12 },
                    }),
                    "Revelled",
                  ],
                }),
                t.isLoggedIn
                  ? Object(i.jsxs)(i.Fragment, {
                      children: [
                        Object(i.jsx)(Q.a, {
                          as: "h2",
                          inverted: !0,
                          content: "Welcome to Revelled",
                        }),
                        Object(i.jsx)(d.a, {
                          as: l.a,
                          to: "/activities",
                          size: "huge",
                          inverted: !0,
                          children: "Go to Activities!",
                        }),
                      ],
                    })
                  : Object(i.jsxs)(i.Fragment, {
                      children: [
                        Object(i.jsx)(d.a, {
                          onClick: function () {
                            return n.openModal(Object(i.jsx)(me, {}));
                          },
                          size: "huge",
                          inverted: !0,
                          children: "Login!",
                        }),
                        Object(i.jsx)(d.a, {
                          onClick: function () {
                            return n.openModal(Object(i.jsx)(ke, {}));
                          },
                          size: "huge",
                          inverted: !0,
                          children: "Register!",
                        }),
                        Object(i.jsx)(pe.a, {
                          horizontal: !0,
                          inverted: !0,
                          children: "Or",
                        }),
                        Object(i.jsx)(d.a, {
                          loading: t.fbLoading,
                          size: "huge",
                          inverted: !0,
                          color: "facebook",
                          content: "Login with Facebook",
                          onClick: t.facebookLogin,
                        }),
                      ],
                    }),
              ],
            }),
          });
        }),
        Ae = n(540);
      function Se(e) {
        var t = e.inverted,
          n = void 0 === t || t,
          r = e.content,
          c = void 0 === r ? "Loading..." : r;
        return Object(i.jsx)(Ae.a, {
          active: !0,
          inverted: n,
          children: Object(i.jsx)(_.a, { content: c }),
        });
      }
      var Pe = n(537);
      function Te(e) {
        var t = Object(Oe.e)(e.name),
          n = Object(J.a)(t, 2),
          r = n[0],
          c = n[1];
        return Object(i.jsxs)(ve.a.Field, {
          error: c.touched && !!c.error,
          children: [
            Object(i.jsx)("label", { children: e.label }),
            Object(i.jsx)("textarea", Object(f.a)(Object(f.a)({}, r), e)),
            c.touched && c.error
              ? Object(i.jsx)(ee.a, {
                  basic: !0,
                  color: "red",
                  children: c.error,
                })
              : null,
          ],
        });
      }
      var Fe = n(524);
      function Ie(e) {
        var t = Object(Oe.e)(e.name),
          n = Object(J.a)(t, 3),
          r = n[0],
          c = n[1],
          a = n[2];
        return Object(i.jsxs)(ve.a.Field, {
          error: c.touched && !!c.error,
          children: [
            Object(i.jsx)("label", { children: e.label }),
            Object(i.jsx)(Fe.a, {
              clearable: !0,
              options: e.options,
              value: r.value || null,
              onChange: function (e, t) {
                return a.setValue(t.value);
              },
              onBlur: function () {
                return a.setTouched(!0);
              },
              placeholder: e.placeholder,
            }),
            c.touched && c.error
              ? Object(i.jsx)(ee.a, {
                  basic: !0,
                  color: "red",
                  children: c.error,
                })
              : null,
          ],
        });
      }
      var Le = [
          { text: "Drinks", value: "drinks" },
          { text: "Culture", value: "culture" },
          { text: "Film", value: "film" },
          { text: "Food", value: "food" },
          { text: "Music", value: "music" },
          { text: "Travel", value: "travel" },
        ],
        Ee = n(281),
        Re = n.n(Ee);
      function Me(e) {
        var t = Object(Oe.e)(e.name),
          n = Object(J.a)(t, 3),
          r = n[0],
          c = n[1],
          a = n[2];
        return Object(i.jsxs)(ve.a.Field, {
          error: c.touched && !!c.error,
          children: [
            Object(i.jsx)(
              Re.a,
              Object(f.a)(
                Object(f.a)(Object(f.a)({}, r), e),
                {},
                {
                  selected: (r.value && new Date(r.value)) || null,
                  onChange: function (e) {
                    return a.setValue(e);
                  },
                }
              )
            ),
            c.touched && c.error
              ? Object(i.jsx)(ee.a, {
                  basic: !0,
                  color: "red",
                  children: c.error,
                })
              : null,
          ],
        });
      }
      var Ne = Object(s.a)(function () {
          var e = Object(fe.g)(),
            t = q().activityStore,
            n = t.createActivity,
            c = t.updateActivity,
            a = t.loadActivity,
            o = t.loadingInitial,
            s = Object(fe.i)().id,
            u = Object(r.useState)(new R()),
            j = Object(J.a)(u, 2),
            b = j[0],
            h = j[1],
            p = xe.a({
              title: xe.b().required("The activity title is required"),
              description: xe
                .b()
                .required("The activity description is required"),
              category: xe.b().required(),
              date: xe.b().required("Date is required").nullable(),
              venue: xe.b().required(),
              city: xe.b().required(),
            });
          return (
            Object(r.useEffect)(
              function () {
                s &&
                  a(s).then(function (e) {
                    return h(new R(e));
                  });
              },
              [s, a]
            ),
            o
              ? Object(i.jsx)(Se, { content: "Loading activity..." })
              : Object(i.jsxs)($.a, {
                  clearing: !0,
                  children: [
                    Object(i.jsx)(Q.a, {
                      content: "Activity Details",
                      sub: !0,
                      color: "teal",
                    }),
                    Object(i.jsx)(Oe.d, {
                      validationSchema: p,
                      enableReinitialize: !0,
                      initialValues: b,
                      onSubmit: function (t) {
                        return (function (t) {
                          if (t.id)
                            c(t).then(function () {
                              return e.push("/activities/".concat(t.id));
                            });
                          else {
                            var i = Object(f.a)(
                              Object(f.a)({}, t),
                              {},
                              { id: Object(Pe.a)() }
                            );
                            n(i).then(function () {
                              return e.push("/activities/".concat(i.id));
                            });
                          }
                        })(t);
                      },
                      children: function (e) {
                        var t = e.handleSubmit,
                          n = e.isValid,
                          r = e.isSubmitting,
                          c = e.dirty;
                        return Object(i.jsxs)(Oe.c, {
                          className: "ui form",
                          onSubmit: t,
                          autoComplete: "off",
                          children: [
                            Object(i.jsx)(ge, {
                              name: "title",
                              placeholder: "Title",
                            }),
                            Object(i.jsx)(Te, {
                              rows: 3,
                              placeholder: "Description",
                              name: "description",
                            }),
                            Object(i.jsx)(Ie, {
                              options: Le,
                              placeholder: "Category",
                              name: "category",
                            }),
                            Object(i.jsx)(Me, {
                              placeholderText: "Date",
                              name: "date",
                              showTimeSelect: !0,
                              timeCaption: "time",
                              dateFormat: "MMMM d, yyyy h:mm aa",
                            }),
                            Object(i.jsx)(Q.a, {
                              content: "Location Details",
                              sub: !0,
                              color: "teal",
                            }),
                            Object(i.jsx)(ge, {
                              placeholder: "City",
                              name: "city",
                            }),
                            Object(i.jsx)(ge, {
                              placeholder: "Venue",
                              name: "venue",
                            }),
                            Object(i.jsx)(d.a, {
                              disabled: r || !c || !n,
                              loading: r,
                              floated: "right",
                              positive: !0,
                              type: "submit",
                              content: "Submit",
                            }),
                            Object(i.jsx)(d.a, {
                              as: l.a,
                              to: "/activities",
                              floated: "right",
                              type: "button",
                              content: "Cancel",
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                })
          );
        }),
        De = n(529),
        ze = n(532),
        Ge = Object(s.a)(function (e) {
          var t = e.activityId,
            n = q().commentStore;
          return (
            Object(r.useEffect)(
              function () {
                return (
                  t && n.createHubConnection(t),
                  function () {
                    n.clearComments();
                  }
                );
              },
              [n, t]
            ),
            Object(i.jsxs)(i.Fragment, {
              children: [
                Object(i.jsx)($.a, {
                  textAlign: "center",
                  attached: "top",
                  inverted: !0,
                  color: "teal",
                  style: { border: "none" },
                  children: Object(i.jsx)(Q.a, {
                    children: "Chat about this event",
                  }),
                }),
                Object(i.jsxs)($.a, {
                  attached: !0,
                  clearing: !0,
                  children: [
                    Object(i.jsx)(Oe.d, {
                      onSubmit: function (e, t) {
                        var i = t.resetForm;
                        return n.addComment(e).then(function () {
                          return i();
                        });
                      },
                      initialValues: { body: "" },
                      validationSchema: xe.a({ body: xe.b().required() }),
                      children: function (e) {
                        var t = e.isSubmitting,
                          n = e.isValid,
                          r = e.handleSubmit;
                        return Object(i.jsx)(Oe.c, {
                          className: "ui form",
                          children: Object(i.jsx)(Oe.b, {
                            name: "body",
                            children: function (e) {
                              return Object(i.jsxs)("div", {
                                style: { position: "relative" },
                                children: [
                                  Object(i.jsx)(_.a, { active: t }),
                                  Object(i.jsx)(
                                    "textarea",
                                    Object(f.a)(
                                      Object(f.a)(
                                        {
                                          placeholder:
                                            "Enter your comment (Enter to submit, SHIFT + enter for new line)",
                                          rows: 2,
                                        },
                                        e.field
                                      ),
                                      {},
                                      {
                                        onKeyPress: function (e) {
                                          ("Enter" === e.key && e.shiftKey) ||
                                            "Enter" !== e.key ||
                                            e.shiftKey ||
                                            (e.preventDefault(), n && r());
                                        },
                                      }
                                    )
                                  ),
                                ],
                              });
                            },
                          }),
                        });
                      },
                    }),
                    Object(i.jsx)(De.a.Group, {
                      children: n.comments.map(function (e) {
                        return Object(i.jsxs)(
                          De.a,
                          {
                            children: [
                              Object(i.jsx)(De.a.Avatar, {
                                src: e.image || "/assets/user.png",
                              }),
                              Object(i.jsxs)(De.a.Content, {
                                children: [
                                  Object(i.jsx)(De.a.Author, {
                                    as: l.a,
                                    to: "/profiles/".concat(e.username),
                                    children: e.displayName,
                                  }),
                                  Object(i.jsx)(De.a.Metadata, {
                                    children: Object(i.jsxs)("div", {
                                      children: [
                                        Object(ze.a)(e.createdAt),
                                        " ago",
                                      ],
                                    }),
                                  }),
                                  Object(i.jsx)(De.a.Text, {
                                    style: { whiteSpace: "pre-wrap" },
                                    children: e.body,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        He = Object(s.a)(function (e) {
          var t = e.activity;
          return Object(i.jsxs)($.a.Group, {
            children: [
              Object(i.jsx)($.a, {
                attached: "top",
                children: Object(i.jsxs)(Y.a, {
                  children: [
                    Object(i.jsx)(Y.a.Column, {
                      width: 1,
                      children: Object(i.jsx)(ne.a, {
                        size: "large",
                        color: "teal",
                        name: "info",
                      }),
                    }),
                    Object(i.jsx)(Y.a.Column, {
                      width: 15,
                      children: Object(i.jsx)("p", { children: t.description }),
                    }),
                  ],
                }),
              }),
              Object(i.jsx)($.a, {
                attached: !0,
                children: Object(i.jsxs)(Y.a, {
                  verticalAlign: "middle",
                  children: [
                    Object(i.jsx)(Y.a.Column, {
                      width: 1,
                      children: Object(i.jsx)(ne.a, {
                        name: "calendar",
                        size: "large",
                        color: "teal",
                      }),
                    }),
                    Object(i.jsx)(Y.a.Column, {
                      width: 15,
                      children: Object(i.jsx)("span", {
                        children: Object(M.default)(
                          t.date,
                          "dd MMM yyyy h:mm aa"
                        ),
                      }),
                    }),
                  ],
                }),
              }),
              Object(i.jsx)($.a, {
                attached: !0,
                children: Object(i.jsxs)(Y.a, {
                  verticalAlign: "middle",
                  children: [
                    Object(i.jsx)(Y.a.Column, {
                      width: 1,
                      children: Object(i.jsx)(ne.a, {
                        name: "marker",
                        size: "large",
                        color: "teal",
                      }),
                    }),
                    Object(i.jsx)(Y.a.Column, {
                      width: 11,
                      children: Object(i.jsxs)("span", {
                        children: [t.venue, ", ", t.city],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }),
        Ue = Object(s.a)(function (e) {
          var t = e.activity,
            n = t.attendees,
            r = t.host;
          return n
            ? Object(i.jsxs)(i.Fragment, {
                children: [
                  Object(i.jsxs)($.a, {
                    textAlign: "center",
                    style: { border: "none" },
                    attached: "top",
                    secondary: !0,
                    inverted: !0,
                    color: "teal",
                    children: [
                      n.length,
                      " ",
                      1 === n.length ? "Person" : "People",
                      " going",
                    ],
                  }),
                  Object(i.jsx)($.a, {
                    attached: !0,
                    children: Object(i.jsx)(ie.a, {
                      relaxed: !0,
                      divided: !0,
                      children: n.map(function (e) {
                        return Object(i.jsxs)(
                          te.a,
                          {
                            style: { position: "relative" },
                            children: [
                              e.username ===
                                (null === r || void 0 === r
                                  ? void 0
                                  : r.username) &&
                                Object(i.jsx)(ee.a, {
                                  style: { position: "absolute" },
                                  color: "orange",
                                  ribbon: "right",
                                  children: "Host",
                                }),
                              Object(i.jsx)(j.a, {
                                size: "tiny",
                                src: e.image || "/assets/user.png",
                              }),
                              Object(i.jsxs)(te.a.Content, {
                                verticalAlign: "middle",
                                children: [
                                  Object(i.jsx)(te.a.Header, {
                                    as: "h3",
                                    children: Object(i.jsx)(l.a, {
                                      to: "/profiles/".concat(e.username),
                                      children: e.displayName,
                                    }),
                                  }),
                                  e.following &&
                                    Object(i.jsx)(te.a.Extra, {
                                      style: { color: "orange" },
                                      children: "Following",
                                    }),
                                ],
                              }),
                            ],
                          },
                          e.username
                        );
                      }),
                    }),
                  }),
                ],
              })
            : null;
        }),
        Ve = { filter: "brightness(30%)" },
        qe = {
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "100%",
          height: "auto",
          color: "white",
        },
        Be = Object(s.a)(function (e) {
          var t,
            n,
            r = e.activity,
            c = q().activityStore,
            a = c.updateAttendance,
            o = c.loading,
            s = c.cancelActivityToggle;
          return Object(i.jsxs)($.a.Group, {
            children: [
              Object(i.jsxs)($.a, {
                basic: !0,
                attached: "top",
                style: { padding: "0" },
                children: [
                  r.isCancelled &&
                    Object(i.jsx)(ee.a, {
                      style: {
                        position: "absolute",
                        zIndex: 1e3,
                        left: -14,
                        top: 20,
                      },
                      ribbon: !0,
                      color: "red",
                      content: "Cancelled",
                    }),
                  Object(i.jsx)(j.a, {
                    src: "/assets/categoryImages/".concat(r.category, ".jpg"),
                    fluid: !0,
                    style: Ve,
                  }),
                  Object(i.jsx)($.a, {
                    style: qe,
                    basic: !0,
                    children: Object(i.jsx)(te.a.Group, {
                      children: Object(i.jsx)(te.a, {
                        children: Object(i.jsxs)(te.a.Content, {
                          children: [
                            Object(i.jsx)(Q.a, {
                              size: "huge",
                              content: r.title,
                              style: { color: "white" },
                            }),
                            Object(i.jsx)("p", {
                              children: Object(M.default)(
                                r.date,
                                "dd MMM yyyy"
                              ),
                            }),
                            Object(i.jsxs)("p", {
                              children: [
                                "Hosted by ",
                                Object(i.jsx)("strong", {
                                  children: Object(i.jsx)(l.a, {
                                    to: "/profiles/".concat(
                                      null === (t = r.host) || void 0 === t
                                        ? void 0
                                        : t.username
                                    ),
                                    children:
                                      null === (n = r.host) || void 0 === n
                                        ? void 0
                                        : n.displayName,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              Object(i.jsx)($.a, {
                clearing: !0,
                attached: "bottom",
                children: r.isHost
                  ? Object(i.jsxs)(i.Fragment, {
                      children: [
                        Object(i.jsx)(d.a, {
                          color: r.isCancelled ? "green" : "red",
                          floated: "left",
                          basic: !0,
                          content: r.isCancelled
                            ? "Re-activate Activity"
                            : "Cancel Activity",
                          onClick: s,
                          loading: o,
                        }),
                        Object(i.jsx)(d.a, {
                          as: l.a,
                          disabled: r.isCancelled,
                          to: "/manage/".concat(r.id),
                          color: "orange",
                          floated: "right",
                          children: "Manage Event",
                        }),
                      ],
                    })
                  : r.isGoing
                  ? Object(i.jsx)(d.a, {
                      loading: o,
                      onClick: a,
                      children: "Cancel attendance",
                    })
                  : Object(i.jsx)(d.a, {
                      disabled: r.isCancelled,
                      loading: o,
                      onClick: a,
                      color: "teal",
                      children: "Join Activity",
                    }),
              }),
            ],
          });
        }),
        Je = Object(s.a)(function () {
          var e = q().activityStore,
            t = e.selectedActivity,
            n = e.loadActivity,
            c = e.loadingInitial,
            a = e.clearSelectedActivity,
            o = Object(fe.i)().id;
          return (
            Object(r.useEffect)(
              function () {
                return (
                  o && n(o),
                  function () {
                    return a();
                  }
                );
              },
              [o, n, a]
            ),
            c || !t
              ? Object(i.jsx)(Se, {})
              : Object(i.jsxs)(Y.a, {
                  children: [
                    Object(i.jsxs)(Y.a.Column, {
                      width: 10,
                      children: [
                        Object(i.jsx)(Be, { activity: t }),
                        Object(i.jsx)(He, { activity: t }),
                        Object(i.jsx)(Ge, { activityId: t.id }),
                      ],
                    }),
                    Object(i.jsx)(Y.a.Column, {
                      width: 6,
                      children: Object(i.jsx)(Ue, { activity: t }),
                    }),
                  ],
                })
          );
        });
      function Ke() {
        var e = Object(r.useState)(null),
          t = Object(J.a)(e, 2),
          n = t[0],
          c = t[1];
        return Object(i.jsxs)(i.Fragment, {
          children: [
            Object(i.jsx)(Q.a, { as: "h1", content: "Test Error component" }),
            Object(i.jsx)($.a, {
              children: Object(i.jsxs)(d.a.Group, {
                widths: "7",
                children: [
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.get("/apibuggy/not-found").catch(function (e) {
                        return console.log(e.response);
                      });
                    },
                    content: "Not Found",
                    basic: !0,
                    primary: !0,
                  }),
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.get("/apibuggy/bad-request").catch(function (e) {
                        return console.log(e.response);
                      });
                    },
                    content: "Bad Request",
                    basic: !0,
                    primary: !0,
                  }),
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.post("/apiactivities", {}).catch(function (e) {
                        return c(e);
                      });
                    },
                    content: "Validation Error",
                    basic: !0,
                    primary: !0,
                  }),
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.get("/apibuggy/server-error").catch(function (e) {
                        return console.log(e.response);
                      });
                    },
                    content: "Server Error",
                    basic: !0,
                    primary: !0,
                  }),
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.get("/apibuggy/unauthorised").catch(function (e) {
                        return console.log(e.response);
                      });
                    },
                    content: "Unauthorised",
                    basic: !0,
                    primary: !0,
                  }),
                  Object(i.jsx)(d.a, {
                    onClick: function () {
                      w.a.get("/apiactivities/notaguid").catch(function (e) {
                        return console.log(e);
                      });
                    },
                    content: "Bad Guid",
                    basic: !0,
                    primary: !0,
                  }),
                ],
              }),
            }),
            n && Object(i.jsx)(we, { errors: n }),
          ],
        });
      }
      function We() {
        return Object(i.jsxs)($.a, {
          placeholder: !0,
          children: [
            Object(i.jsxs)(Q.a, {
              icon: !0,
              children: [
                Object(i.jsx)(ne.a, { name: "search" }),
                "Oops - we've looked everywhere and could not find this.",
              ],
            }),
            Object(i.jsx)($.a.Inline, {
              children: Object(i.jsx)(d.a, {
                as: l.a,
                to: "/activities",
                primary: !0,
                children: "Return to activities page",
              }),
            }),
          ],
        });
      }
      var Ye = Object(s.a)(function () {
          var e,
            t,
            n = q().commonStore;
          return Object(i.jsxs)(o.a, {
            children: [
              Object(i.jsx)(Q.a, { as: "h1", content: "Server Error" }),
              Object(i.jsx)(Q.a, {
                sub: !0,
                as: "h5",
                color: "red",
                content:
                  null === (e = n.error) || void 0 === e ? void 0 : e.message,
              }),
              (null === (t = n.error) || void 0 === t ? void 0 : t.details) &&
                Object(i.jsxs)($.a, {
                  children: [
                    Object(i.jsx)(Q.a, {
                      as: "h4",
                      content: "Stack trace",
                      color: "teal",
                    }),
                    Object(i.jsx)("code", {
                      style: { marginTop: "10px" },
                      children: n.error.details,
                    }),
                  ],
                }),
            ],
          });
        }),
        _e = n(533),
        Ze = Object(s.a)(function () {
          var e = q().modalStore;
          return Object(i.jsx)(_e.a, {
            open: e.modal.open,
            onClose: e.closeModal,
            size: "mini",
            children: Object(i.jsx)(_e.a.Content, { children: e.modal.body }),
          });
        }),
        Qe = n(545),
        Xe = Object(s.a)(function (e) {
          var t = e.setEditMode,
            n = q().profileStore,
            r = n.profile,
            c = n.updateProfile;
          return Object(i.jsx)(Oe.d, {
            initialValues: {
              displayName: null === r || void 0 === r ? void 0 : r.displayName,
              bio: null === r || void 0 === r ? void 0 : r.bio,
            },
            onSubmit: function (e) {
              c(e).then(function () {
                t(!1);
              });
            },
            validationSchema: xe.a({ displayName: xe.b().required() }),
            children: function (e) {
              var t = e.isSubmitting,
                n = e.isValid,
                r = e.dirty;
              return Object(i.jsxs)(Oe.c, {
                className: "ui form",
                children: [
                  Object(i.jsx)(ge, {
                    placeholder: "Display Name",
                    name: "displayName",
                  }),
                  Object(i.jsx)(Te, {
                    rows: 3,
                    placeholder: "Add your bio",
                    name: "bio",
                  }),
                  Object(i.jsx)(d.a, {
                    positive: !0,
                    type: "submit",
                    loading: t,
                    content: "Update profile",
                    floated: "right",
                    disabled: !n || !r,
                  }),
                ],
              });
            },
          });
        }),
        $e = Object(s.a)(function () {
          var e = q().profileStore,
            t = e.isCurrentUser,
            n = e.profile,
            c = Object(r.useState)(!1),
            a = Object(J.a)(c, 2),
            o = a[0],
            s = a[1];
          return Object(i.jsx)(Qe.a.Pane, {
            children: Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsxs)(Y.a.Column, {
                  width: "16",
                  children: [
                    Object(i.jsx)(Q.a, {
                      floated: "left",
                      icon: "user",
                      content: "About ".concat(
                        null === n || void 0 === n ? void 0 : n.displayName
                      ),
                    }),
                    t &&
                      Object(i.jsx)(d.a, {
                        floated: "right",
                        basic: !0,
                        content: o ? "Cancel" : "Edit Profile",
                        onClick: function () {
                          return s(!o);
                        },
                      }),
                  ],
                }),
                Object(i.jsx)(Y.a.Column, {
                  width: "16",
                  children: o
                    ? Object(i.jsx)(Xe, { setEditMode: s })
                    : Object(i.jsx)("span", {
                        style: { whiteSpace: "pre-wrap" },
                        children: null === n || void 0 === n ? void 0 : n.bio,
                      }),
                }),
              ],
            }),
          });
        }),
        et = [
          { menuItem: "Future Events", pane: { key: "future" } },
          { menuItem: "Past Events", pane: { key: "past" } },
          { menuItem: "Hosting", pane: { key: "hosting" } },
        ],
        tt = Object(s.a)(function () {
          var e = q().profileStore,
            t = e.loadUserActivities,
            n = e.profile,
            c = e.loadingActivities,
            a = e.userActivities;
          Object(r.useEffect)(
            function () {
              t(n.username);
            },
            [t, n]
          );
          return Object(i.jsx)(Qe.a.Pane, {
            loading: c,
            children: Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsx)(Y.a.Column, {
                  width: 16,
                  children: Object(i.jsx)(Q.a, {
                    floated: "left",
                    icon: "calendar",
                    content: "Activities",
                  }),
                }),
                Object(i.jsxs)(Y.a.Column, {
                  width: 16,
                  children: [
                    Object(i.jsx)(Qe.a, {
                      panes: et,
                      menu: { secondary: !0, pointing: !0 },
                      onTabChange: function (e, i) {
                        return (function (e, i) {
                          t(n.username, et[i.activeIndex].pane.key);
                        })(0, i);
                      },
                    }),
                    Object(i.jsx)("br", {}),
                    Object(i.jsx)(ce.a.Group, {
                      itemsPerRow: 4,
                      children: a.map(function (e) {
                        return Object(i.jsxs)(
                          ce.a,
                          {
                            as: l.a,
                            to: "/activities/".concat(e.id),
                            children: [
                              Object(i.jsx)(j.a, {
                                src: "/assets/categoryImages/".concat(
                                  e.category,
                                  ".jpg"
                                ),
                                style: { minHeight: 100, objectFit: "cover" },
                              }),
                              Object(i.jsxs)(ce.a.Content, {
                                children: [
                                  Object(i.jsx)(ce.a.Header, {
                                    textAlign: "center",
                                    children: e.title,
                                  }),
                                  Object(i.jsxs)(ce.a.Meta, {
                                    textAlign: "center",
                                    children: [
                                      Object(i.jsx)("div", {
                                        children: Object(M.default)(
                                          new Date(e.date),
                                          "do LLL"
                                        ),
                                      }),
                                      Object(i.jsx)("div", {
                                        children: Object(M.default)(
                                          new Date(e.date),
                                          "h:mm a"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        nt = Object(s.a)(function () {
          var e = q().profileStore,
            t = e.profile,
            n = e.followings,
            r = e.loadingFollowings,
            c = e.activeTab;
          return Object(i.jsx)(Qe.a.Pane, {
            loading: r,
            children: Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsx)(Y.a.Column, {
                  width: "16",
                  children: Object(i.jsx)(Q.a, {
                    floated: "left",
                    icon: "user",
                    content:
                      3 === c
                        ? "People following ".concat(t.displayName)
                        : "People ".concat(
                            null === t || void 0 === t ? void 0 : t.displayName,
                            " is following"
                          ),
                  }),
                }),
                Object(i.jsx)(Y.a.Column, {
                  width: "16",
                  children: Object(i.jsx)(ce.a.Group, {
                    itemsPerRow: 4,
                    children: n.map(function (e) {
                      return Object(i.jsx)(se, { profile: e }, e.username);
                    }),
                  }),
                }),
              ],
            }),
          });
        }),
        it = n(284);
      n(499);
      function rt(e) {
        var t = e.imagePreview,
          n = e.setCropper;
        return Object(i.jsx)(it.a, {
          src: t,
          style: { height: 200, width: "100%" },
          initialAspectRatio: 1,
          aspectRatio: 1,
          preview: ".img-preview",
          guides: !1,
          viewMode: 1,
          autoCropArea: 1,
          background: !1,
          onInitialized: function (e) {
            return n(e);
          },
        });
      }
      var ct = n(289);
      function at(e) {
        var t = e.setFiles,
          n = {
            border: "dashed 3px #eee",
            borderColor: "#eee",
            borderRadius: "5px",
            paddingTop: "30px",
            textAlign: "center",
            height: 200,
          },
          c = Object(r.useCallback)(
            function (e) {
              t(
                e.map(function (e) {
                  return Object.assign(e, { preview: URL.createObjectURL(e) });
                })
              );
            },
            [t]
          ),
          a = Object(ct.a)({ onDrop: c }),
          o = a.getRootProps,
          s = a.getInputProps,
          l = a.isDragActive;
        return Object(i.jsxs)(
          "div",
          Object(f.a)(
            Object(f.a)({}, o()),
            {},
            {
              style: l
                ? Object(f.a)(Object(f.a)({}, n), { borderColor: "green" })
                : n,
              children: [
                Object(i.jsx)("input", Object(f.a)({}, s())),
                Object(i.jsx)(ne.a, { name: "upload", size: "huge" }),
                Object(i.jsx)(Q.a, { content: "Drop image here" }),
              ],
            }
          )
        );
      }
      function ot(e) {
        var t = e.loading,
          n = e.uploadPhoto,
          c = Object(r.useState)([]),
          a = Object(J.a)(c, 2),
          o = a[0],
          s = a[1],
          l = Object(r.useState)(),
          u = Object(J.a)(l, 2),
          j = u[0],
          b = u[1];
        return (
          Object(r.useEffect)(
            function () {
              return function () {
                o.forEach(function (e) {
                  return URL.revokeObjectURL(e.preview);
                });
              };
            },
            [o]
          ),
          Object(i.jsxs)(Y.a, {
            children: [
              Object(i.jsxs)(Y.a.Column, {
                width: 4,
                children: [
                  Object(i.jsx)(Q.a, {
                    sub: !0,
                    color: "teal",
                    content: "Step 1 - Add Photo",
                  }),
                  Object(i.jsx)(at, { setFiles: s }),
                ],
              }),
              Object(i.jsx)(Y.a.Column, { width: 1 }),
              Object(i.jsxs)(Y.a.Column, {
                width: 4,
                children: [
                  Object(i.jsx)(Q.a, {
                    sub: !0,
                    color: "teal",
                    content: "Step 2 - Resize image",
                  }),
                  o &&
                    o.length > 0 &&
                    Object(i.jsx)(rt, {
                      setCropper: b,
                      imagePreview: o[0].preview,
                    }),
                ],
              }),
              Object(i.jsx)(Y.a.Column, { width: 1 }),
              Object(i.jsxs)(Y.a.Column, {
                width: 4,
                children: [
                  Object(i.jsx)(Q.a, {
                    sub: !0,
                    color: "teal",
                    content: "Step 3 - Preview & Upload",
                  }),
                  o &&
                    o.length > 0 &&
                    Object(i.jsxs)(i.Fragment, {
                      children: [
                        Object(i.jsx)("div", {
                          className: "img-preview",
                          style: { minHeight: 200, overflow: "hidden" },
                        }),
                        Object(i.jsxs)(d.a.Group, {
                          widths: 2,
                          children: [
                            Object(i.jsx)(d.a, {
                              loading: t,
                              onClick: function () {
                                j &&
                                  j.getCroppedCanvas().toBlob(function (e) {
                                    return n(e);
                                  });
                              },
                              positive: !0,
                              icon: "check",
                            }),
                            Object(i.jsx)(d.a, {
                              disabled: t,
                              onClick: function () {
                                return s([]);
                              },
                              icon: "close",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        );
      }
      var st = Object(s.a)(function (e) {
          var t,
            n = e.profile,
            c = q().profileStore,
            a = c.isCurrentUser,
            o = c.uploadPhoto,
            s = c.uploading,
            l = c.loading,
            u = c.setMainPhoto,
            b = c.deletePhoto,
            h = Object(r.useState)(!1),
            f = Object(J.a)(h, 2),
            p = f[0],
            O = f[1],
            v = Object(r.useState)(""),
            g = Object(J.a)(v, 2),
            m = g[0],
            x = g[1];
          return Object(i.jsx)(Qe.a.Pane, {
            children: Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsxs)(Y.a.Column, {
                  width: 16,
                  children: [
                    Object(i.jsx)(Q.a, {
                      floated: "left",
                      icon: "image",
                      content: "Photos",
                    }),
                    a &&
                      Object(i.jsx)(d.a, {
                        floated: "right",
                        basic: !0,
                        content: p ? "Cancel" : "Add Photo",
                        onClick: function () {
                          return O(!p);
                        },
                      }),
                  ],
                }),
                Object(i.jsx)(Y.a.Column, {
                  width: 16,
                  children: p
                    ? Object(i.jsx)(ot, {
                        uploadPhoto: function (e) {
                          o(e).then(function () {
                            return O(!1);
                          });
                        },
                        loading: s,
                      })
                    : Object(i.jsx)(ce.a.Group, {
                        itemsPerRow: 5,
                        children:
                          null === (t = n.photos) || void 0 === t
                            ? void 0
                            : t.map(function (e) {
                                return Object(i.jsxs)(
                                  ce.a,
                                  {
                                    children: [
                                      Object(i.jsx)(j.a, { src: e.url }),
                                      a &&
                                        Object(i.jsxs)(d.a.Group, {
                                          fluid: !0,
                                          widths: 2,
                                          children: [
                                            Object(i.jsx)(d.a, {
                                              basic: !0,
                                              color: "green",
                                              content: "Main",
                                              name: "main" + e.id,
                                              disabled: e.isMain,
                                              loading: m === "main" + e.id && l,
                                              onClick: function (t) {
                                                return (function (e, t) {
                                                  x(t.currentTarget.name), u(e);
                                                })(e, t);
                                              },
                                            }),
                                            Object(i.jsx)(d.a, {
                                              basic: !0,
                                              color: "red",
                                              icon: "trash",
                                              loading: m === e.id && l,
                                              onClick: function (t) {
                                                return (function (e, t) {
                                                  x(t.currentTarget.name), b(e);
                                                })(e, t);
                                              },
                                              disabled: e.isMain,
                                              name: e.id,
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  e.id
                                );
                              }),
                      }),
                }),
              ],
            }),
          });
        }),
        lt = Object(s.a)(function (e) {
          var t = e.profile,
            n = q().profileStore,
            r = [
              {
                menuItem: "About",
                render: function () {
                  return Object(i.jsx)($e, {});
                },
              },
              {
                menuItem: "Photos",
                render: function () {
                  return Object(i.jsx)(st, { profile: t });
                },
              },
              {
                menuItem: "Events",
                render: function () {
                  return Object(i.jsx)(tt, {});
                },
              },
              {
                menuItem: "Followers",
                render: function () {
                  return Object(i.jsx)(nt, {});
                },
              },
              {
                menuItem: "Following",
                render: function () {
                  return Object(i.jsx)(nt, {});
                },
              },
            ];
          return Object(i.jsx)(Qe.a, {
            menu: { fluid: !0, vertical: !0 },
            menuPosition: "right",
            panes: r,
            onTabChange: function (e, t) {
              return n.setActiveTab(t.activeIndex);
            },
          });
        }),
        ut = n(539),
        dt = Object(s.a)(function (e) {
          var t = e.profile;
          return Object(i.jsx)($.a, {
            children: Object(i.jsxs)(Y.a, {
              children: [
                Object(i.jsx)(Y.a.Column, {
                  width: 12,
                  children: Object(i.jsx)(te.a.Group, {
                    children: Object(i.jsxs)(te.a, {
                      children: [
                        Object(i.jsx)(te.a.Image, {
                          avatar: !0,
                          size: "small",
                          src: t.image || "/assets/user.png",
                        }),
                        Object(i.jsx)(te.a.Content, {
                          verticalAlign: "middle",
                          children: Object(i.jsx)(Q.a, {
                            as: "h1",
                            content: t.displayName,
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                Object(i.jsxs)(Y.a.Column, {
                  width: 4,
                  children: [
                    Object(i.jsxs)(ut.a.Group, {
                      widths: 2,
                      children: [
                        Object(i.jsx)(ut.a, {
                          label: "Followers",
                          value: t.followersCount,
                        }),
                        Object(i.jsx)(ut.a, {
                          label: "Following",
                          value: t.followingCount,
                        }),
                      ],
                    }),
                    Object(i.jsx)(pe.a, {}),
                    Object(i.jsx)(oe, { profile: t }),
                  ],
                }),
              ],
            }),
          });
        }),
        jt = Object(s.a)(function () {
          var e = Object(fe.i)().username,
            t = q().profileStore,
            n = t.loadingProfile,
            c = t.loadProfile,
            a = t.profile,
            o = t.setActiveTab;
          return (
            Object(r.useEffect)(
              function () {
                return (
                  c(e),
                  function () {
                    o(0);
                  }
                );
              },
              [c, e, o]
            ),
            n
              ? Object(i.jsx)(Se, { content: "Loading profile..." })
              : Object(i.jsx)(Y.a, {
                  children: Object(i.jsx)(Y.a.Column, {
                    width: 16,
                    children:
                      a &&
                      Object(i.jsxs)(i.Fragment, {
                        children: [
                          Object(i.jsx)(dt, { profile: a }),
                          Object(i.jsx)(lt, { profile: a }),
                        ],
                      }),
                  }),
                })
          );
        }),
        bt = n(290);
      function ht(e) {
        var t = e.component,
          n = Object(bt.a)(e, ["component"]),
          r = q().userStore.isLoggedIn;
        return Object(i.jsx)(
          fe.b,
          Object(f.a)(
            Object(f.a)({}, n),
            {},
            {
              render: function (e) {
                return r
                  ? Object(i.jsx)(t, Object(f.a)({}, e))
                  : Object(i.jsx)(fe.a, { to: "/" });
              },
            }
          )
        );
      }
      function ft() {
        return new URLSearchParams(Object(fe.h)().search);
      }
      function pt() {
        var e = ft().get("email");
        return Object(i.jsxs)($.a, {
          placeholder: !0,
          textAlign: "center",
          children: [
            Object(i.jsxs)(Q.a, {
              icon: !0,
              color: "green",
              children: [
                Object(i.jsx)(ne.a, { name: "check" }),
                "Successfully registered!",
              ],
            }),
            Object(i.jsx)("p", {
              children:
                "Please check your email (including junk email) for the verification email",
            }),
            e &&
              Object(i.jsxs)(i.Fragment, {
                children: [
                  Object(i.jsx)("p", {
                    children:
                      "Didn't receive the email?  Click the below button to resend",
                  }),
                  Object(i.jsx)(d.a, {
                    primary: !0,
                    onClick: function () {
                      L.Account.resendEmailConfirm(e)
                        .then(function () {
                          k.b.success(
                            "Verification email resent - please check your email"
                          );
                        })
                        .catch(function (e) {
                          return console.log(e);
                        });
                    },
                    content: "Resend email",
                    size: "huge",
                  }),
                ],
              }),
          ],
        });
      }
      function Ot() {
        var e = q().modalStore,
          t = ft().get("email"),
          n = ft().get("token"),
          c = "Verifying",
          a = "Failed",
          o = "Success",
          s = Object(r.useState)(c),
          l = Object(J.a)(s, 2),
          u = l[0],
          j = l[1];
        function b() {
          L.Account.resendEmailConfirm(t)
            .then(function () {
              k.b.success(
                "Verification email resent - please check your email"
              );
            })
            .catch(function (e) {
              return console.log(e);
            });
        }
        return (
          Object(r.useEffect)(
            function () {
              L.Account.verifyEmail(n, t)
                .then(function () {
                  j(o);
                })
                .catch(function () {
                  j(a);
                });
            },
            [a, o, n, t]
          ),
          Object(i.jsxs)($.a, {
            placeholder: !0,
            textAlign: "center",
            children: [
              Object(i.jsxs)(Q.a, {
                icon: !0,
                children: [
                  Object(i.jsx)(ne.a, { name: "envelope" }),
                  "Email verification",
                ],
              }),
              Object(i.jsx)($.a.Inline, {
                children: (function () {
                  switch (u) {
                    case c:
                      return Object(i.jsx)("p", { children: "Verifying..." });
                    case a:
                      return Object(i.jsxs)("div", {
                        children: [
                          Object(i.jsx)("p", {
                            children:
                              "Verification failed.  You can try resending the verify link to your email",
                          }),
                          Object(i.jsx)(d.a, {
                            primary: !0,
                            onClick: b,
                            size: "huge",
                            content: "Resend email",
                          }),
                        ],
                      });
                    case o:
                      return Object(i.jsxs)("div", {
                        children: [
                          Object(i.jsx)("p", {
                            children:
                              "Email has been verified - you can now login",
                          }),
                          Object(i.jsx)(d.a, {
                            primary: !0,
                            onClick: function () {
                              return e.openModal(Object(i.jsx)(me, {}));
                            },
                            size: "huge",
                          }),
                        ],
                      });
                  }
                })(),
              }),
            ],
          })
        );
      }
      var vt = Object(s.a)(function () {
          var e = Object(fe.h)(),
            t = q(),
            n = t.commonStore,
            c = t.userStore;
          return (
            Object(r.useEffect)(
              function () {
                n.token
                  ? c.getUser().finally(function () {
                      return n.setAppLoaded();
                    })
                  : c.getFacebookLoginStatus().then(function () {
                      return n.setAppLoaded();
                    });
              },
              [n, c]
            ),
            n.appLoaded
              ? Object(i.jsxs)(i.Fragment, {
                  children: [
                    Object(i.jsx)(k.a, {
                      position: "bottom-right",
                      hideProgressBar: !0,
                    }),
                    Object(i.jsx)(Ze, {}),
                    Object(i.jsx)(fe.b, {
                      exact: !0,
                      path: "/",
                      component: Ce,
                    }),
                    Object(i.jsx)(fe.b, {
                      path: "/(.+)",
                      render: function () {
                        return Object(i.jsxs)(i.Fragment, {
                          children: [
                            Object(i.jsx)(B, {}),
                            Object(i.jsx)(o.a, {
                              style: { marginTop: "7em" },
                              children: Object(i.jsxs)(fe.d, {
                                children: [
                                  Object(i.jsx)(ht, {
                                    exact: !0,
                                    path: "/activities",
                                    component: he,
                                  }),
                                  Object(i.jsx)(ht, {
                                    path: "/activities/:id",
                                    component: Je,
                                  }),
                                  Object(i.jsx)(
                                    ht,
                                    {
                                      path: ["/createActivity", "/manage/:id"],
                                      component: Ne,
                                    },
                                    e.key
                                  ),
                                  Object(i.jsx)(ht, {
                                    path: "/profiles/:username",
                                    component: jt,
                                  }),
                                  Object(i.jsx)(ht, {
                                    path: "/errors",
                                    component: Ke,
                                  }),
                                  Object(i.jsx)(fe.b, {
                                    path: "/server-error",
                                    component: Ye,
                                  }),
                                  Object(i.jsx)(fe.b, {
                                    path: "/account/registerSuccess",
                                    component: pt,
                                  }),
                                  Object(i.jsx)(fe.b, {
                                    path: "/account/verifyEmail",
                                    component: Ot,
                                  }),
                                  Object(i.jsx)(fe.b, { component: We }),
                                ],
                              }),
                            }),
                          ],
                        });
                      },
                    }),
                  ],
                })
              : Object(i.jsx)(Se, { content: "Loading app..." })
          );
        }),
        gt = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 546))
              .then(function (t) {
                var n = t.getCLS,
                  i = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  a = t.getTTFB;
                n(e), i(e), r(e), c(e), a(e);
              });
        },
        mt = n(50);
      function xt() {
        var e = Object(fe.h)().pathname;
        return (
          Object(r.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var yt = Object(mt.a)();
      a.a.render(
        Object(i.jsx)(V.Provider, {
          value: U,
          children: Object(i.jsxs)(fe.c, {
            history: yt,
            children: [Object(i.jsx)(xt, {}), Object(i.jsx)(vt, {})],
          }),
        }),
        document.getElementById("root")
      ),
        gt();
    },
  },
  [[500, 1, 2]],
]);
//# sourceMappingURL=main.7aff46c4.chunk.js.map
