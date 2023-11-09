import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useItems from "../Hooks/useItems";

describe('useItems', () => {
    test('should add and remove items', () => {
        const { result } = renderHook(() => useItems())
        expect(result.current.items.length).toBe(0);

        act(() => {
            result.current.addItem('Jugar DS3 🎮')
            result.current.addItem('Subir de lvl Lol 🎮')
        })
        expect(result.current.items.length).toBe(2)

        act(() => {
            result.current.removeItem(result.current.items[0].id)
        })
        expect(result.current.items.length).toBe(1)
    })
})