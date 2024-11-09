# React Obsidian Setting Component

A declarative React wrapper for Obsidian's native Setting component.

## Why?

When developing Obsidian plugins with React, working with the native Setting object traditionally requires either:
- Passing `containerEl` directly to React components (non-idiomatic)
- Using multiple `useEffect` and `useRef` hooks (verbose and complex)

This wrapper provides a clean, declarative React-style API for creating native Obsidian settings.

## Usage Example

### Traditional Approach
```jsx
const Page = () => {
    const ref = useRef<HTMLElement | null>(null)
    useEffect(() => {
        if (ref.current) {
            const containerEl = ref.current as HTMLElement;
            new Setting(containerEl).addButton((button) => {
                button.setIcon('save')
            })
            // ... and so on
        }
    }, [ref])
    
    return <div ref={ref}></div>
}
```

### With ReactObsidianSetting

```jsx
const Page = () => {
    return (
        <ReactObsidianSetting
            name='Name'
            addButtons={[
                (button) => button.setIcon('save')
            ]}
        />
    )
}
```
