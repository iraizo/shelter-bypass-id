const { util: { log }, plugin: { scoped: { patcher } }, flux: { storesFlat } } = shelter;

export const onLoad = () => {
  log("ID Verification bypass loaded :3c");
  patcher.after("getCurrentUser", storesFlat.UserStore.__proto__, (_, v) => {
    v.ageVerificationStatus = 3;
  });
  
  patcher.instead("setRequestHeader", XMLHttpRequest.prototype, function(args, orig) {
    if (args[0] == "X-Super-Properties") {
      args[1] =
        "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImVuLUdCIiwiaGFzX2NsaWVudF9tb2RzIjpmYWxzZSwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NClBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTIwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMjAuMCIsIm9zX3ZlcnNpb24iOiIxMCIsInJlZmVycmVyIjoiIiwicmVmZXJyaW5nX2RvbWFpbiI6IiIsInJlZmVycmVy_..._"; 
    }
    return orig.apply(this, args);
  });
};

export const onUnload = () => log("ID Verification bypass unloaded");
