export const setLocalUser =(selector)=>{
    // document.cookie = `token=${selector?.currentUser?.user?.token}; expires=Thu, 31 Aug 2023 00:00:00 UTC; path=/`;
    let userId = selector?.currentUser?.user?.userId;
    localStorage.setItem("localUser",JSON.stringify(userId))
  }