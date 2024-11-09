# What is this component about?

I sometimes create plugins for Obsidian. I use React for plugins, including for the settings tab.
I'm faced with the fact that in order to use the native Setting object from Obsidian, I need to either pass the containerEl object directly to the React component's props. It's not pretty. Or should I use multiple useEffect and useRef. This is also ugly and simply inconvenient. I wanted to create native Obsidian settings in a declarative React-like style. It is for this purpose that I wrote this little wrapper component.

## What it looks like:
Before:
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
After:
```jsx
const Page = () => {
    return (
        <ReactObsidianSetting
            name='Name'
            addButtons={[
                    (button) => button.setIcon('save')
            ]
            }
        />
    )
}
```


