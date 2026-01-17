/** @type {import("@uwu/shelter-defs")} */
{
  onLoad: async () => {
    const {
      util: { log },
      plugin: { scoped: { patcher } },
      flux: { awaitStore }
    } = shelter;

    const UserStore = await awaitStore("UserStore");

    log("ID Verification bypass loaded :3c");

    patcher.after("getCurrentUser", UserStore, (_, v) => {
      if (v) {
        v.ageVerificationStatus = 3;
      }
    });

    patcher.instead("setRequestHeader", XMLHttpRequest.prototype, function (args, orig) {
      if (args[0] === "X-Super-Properties") {
        args[1] = "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLUdCIiwiaGFzX2NsaWVudF9tb2RzIjpmYWxzZSwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NClBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTIwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMjAuMCIsIm9zX3ZlcnNpb24iOiIxMCIsInJlZmVycmVyIjoiIiwicmVmZXJyaW5nX2RvbWFpbiI6IiJ9";
      }
      return orig.apply(this, args);
    });
  },

  onUnload: () => {
    shelter.util.log("ID Verification bypass unloaded");
  }
}
