// import type { Auth } from '../types/auth.type'
import { createAuthSlice, type AuthSliceStore } from './authSlice'
import { create } from 'zustand'

export const useStore = create<AuthSliceStore>()((...a) => ({
  ...createAuthSlice(...a),
}))