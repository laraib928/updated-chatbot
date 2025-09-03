# Lead AI Chat Widget - Embed Version

This is the standalone HTML version of the Lead AI Chat Widget that can be embedded on any website.

## Direct Access

- **Widget URL**: `https://updated-chatbot-mauve.vercel.app/chat-widget-embed.html`
- **Embed Script**: `https://updated-chatbot-mauve.vercel.app/embed-script.js`

## How to Use

### Method 1: Direct iframe Embed
Add this iframe to your website:

```html
<iframe 
    src="https://updated-chatbot-mauve.vercel.app/chat-widget-embed.html"
    width="400" 
    height="620" 
    frameborder="0"
    style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);"
    allow="microphone">
</iframe>
```

### Method 2: Using the Embed Script
Add this script to your website's `<head>` or before closing `</body>`:

```html
<script src="https://updated-chatbot-mauve.vercel.app/embed-script.js"></script>
```

The script will automatically create and position the chat widget.

## Features

- ✅ Standalone HTML/CSS/JavaScript (no React dependencies)
- ✅ Voice recording and transcription
- ✅ Lead generation functionality
- ✅ Form collection for contact information
- ✅ Responsive design
- ✅ Customizable positioning
- ✅ Session storage for message persistence
- ✅ Cross-origin compatible

## Configuration

The embed script accepts configuration options:

```javascript
window.LeadAIChatWidget = {
    config: {
        apiUrl: 'https://1db24.lead-ai-chatbot-a801.c66.me',
        primaryColor: '#6366f1',
        position: 'bottom-right', // 'bottom-left', 'top-right', 'top-left'
        widgetUrl: 'https://updated-chatbot-mauve.vercel.app/chat-widget-embed.html'
    }
};
```

## API Endpoints

The widget connects to these backend endpoints:
- `/chat` - Main chat functionality
- `/transcribe` - Voice transcription
- `/generate-leads` - Lead generation
- `/form` - Form submission
- `/clear_history` - Clear chat history

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

If the widget doesn't load:
1. Check browser console for errors
2. Ensure the iframe has `allow="microphone"` attribute
3. Verify the widget URL is accessible
4. Check CORS settings if embedding on different domain