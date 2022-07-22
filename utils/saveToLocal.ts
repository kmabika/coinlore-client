function handleSaveToLocal(list: CoinsType[]) {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", JSON.stringify(list));
    }
  }

export default handleSaveToLocal;