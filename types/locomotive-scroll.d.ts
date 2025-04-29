declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
        el?: HTMLElement | string;
        smooth?: boolean;
        direction?: 'horizontal' | 'vertical';
        lerp?: number;
        multiplier?: number;
        firefoxMultiplier?: number;
        touchMultiplier?: number;
        scrollFromAnywhere?: boolean;
        gestureDirection?: 'both' | 'vertical' | 'horizontal';
        reloadOnContextChange?: boolean;
        resetNativeScroll?: boolean;
        getDirection?: boolean;
        getSpeed?: boolean;
        class?: string;
        initClass?: string;
        scrollingClass?: string;
        draggingClass?: string;
        smoothClass?: string;
        scrollbarClass?: string;
        tablet?: LocomotiveScrollOptions;
        smartphone?: LocomotiveScrollOptions;
    }

    class LocomotiveScroll {
        constructor(options?: LocomotiveScrollOptions);
        init(): void;
        start(): void;
        stop(): void;
        scrollTo(target: string | number | HTMLElement): void;
        update(): void;
        destroy(): void;
        on(event: string, callback: () => void): void;
        off(event: string, callback: () => void): void;
    }

    export default LocomotiveScroll;
} 