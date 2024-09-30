import { create } from "zustand";

interface AuthModalsStore {
  showLoginDialog: boolean;
  showRegisterDialog: boolean;
  showResetPasswordDialog: boolean;
  openLoginDialog: () => void;
  openRegisterDialog: () => void;
  openResetPasswordDialog: () => void;
  closeDialogs: () => void;
  setShowLoginDialog: (isOpen: boolean) => void;
  setShowRegisterDialog: (isOpen: boolean) => void;
  setShowResetPasswordDialog: (isOpen: boolean) => void;
}

const useAuthModalsStore = create<AuthModalsStore>((set) => ({
  showLoginDialog: false,
  showRegisterDialog: false,
  showResetPasswordDialog: false,
  openLoginDialog: () =>
    set({
      showLoginDialog: true,
      showRegisterDialog: false,
      showResetPasswordDialog: false,
    }),
  openRegisterDialog: () =>
    set({
      showLoginDialog: false,
      showRegisterDialog: true,
      showResetPasswordDialog: false,
    }),
  openResetPasswordDialog: () =>
    set({
      showLoginDialog: false,
      showRegisterDialog: false,
      showResetPasswordDialog: true,
    }),
  closeDialogs: () =>
    set({
      showLoginDialog: false,
      showRegisterDialog: false,
      showResetPasswordDialog: false,
    }),
  setShowLoginDialog: (isOpen) => set({ showLoginDialog: isOpen }),
  setShowRegisterDialog: (isOpen) => set({ showRegisterDialog: isOpen }),
  setShowResetPasswordDialog: (isOpen) =>
    set({ showResetPasswordDialog: isOpen }),
}));

export default useAuthModalsStore;
