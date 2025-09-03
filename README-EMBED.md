# Lead AI Chat Widget - Embed Instructions

This is a standalone, embeddable chat widget that can be integrated into any website using an iframe. The widget provides a beautiful chat interface with AI-powered responses for digital marketing services.

## Features

- 🎨 **Beautiful UI**: Modern, responsive design with smooth animations
- 🤖 **AI-Powered**: Connects to your Lead AI backend for intelligent responses
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- 🎯 **Customizable**: Configurable colors, position, and branding
- 🔒 **Secure**: Runs in isolated iframe environment
- ⚡ **Lightweight**: Minimal impact on host website performance

## Quick Start

### Option 1: Simple Iframe Embed (Recommended)

Add this HTML code to your website where you want the chat widget to appear:

```html
<iframe 
    src="https://your-domain.com/chat-widget-embed.html"
    style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 50%;
        z-index: 9999;
        box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        transition: all 0.3s ease;
        background: transparent;
    "
    title="Lead AI Chat Widget"
    id="lead-ai-chat-widget">
</iframe>
```

### Option 2: JavaScript Embed Script

1. **Include the embed script** in your HTML `<head>` or before the closing `</body>` tag:

```html
<script src="https://your-domain.com/embed-script.js"></script>
```

2. **Customize the configuration** by modifying the script variables:

```javascript
// The script will automatically create the iframe
// You can customize it by modifying the config object in embed-script.js
```

## Configuration Options

### Position Options

You can position the widget in any of these locations:

- `bottom-right` (default)
- `bottom-left`
- `top-right`
- `top-left`

### Customization

The widget supports the following customizations:

- **API URL**: Point to your Lead AI backend
- **Primary Color**: Customize the color scheme
- **Position**: Choose widget placement
- **Branding**: Add your logo and company name

## File Structure

```
updated-chatbot/
├── chat-widget-embed.html    # Main widget HTML file
├── embed-script.js           # JavaScript embed script
└── README-EMBED.md          # This file
```

## Setup Instructions

### 1. Host the Widget Files

Upload these files to your web server:
- `chat-widget-embed.html`
- `embed-script.js`

### 2. Update URLs

In both files, replace `https://your-domain.com` with your actual domain.

### 3. Update API Endpoint

In `chat-widget-embed.html`, update the `apiUrl` in the ChatWidget constructor:

```javascript
chatWidget = new ChatWidget({
    apiUrl: 'https://your-actual-api-domain.com', // Update this
    primaryColor: '#6366f1',
    position: 'bottom-right'
});
```

### 4. Embed on Your Website

Choose one of the embed methods above and add the code to your website.

## Advanced Customization

### Custom Colors

Modify the CSS variables in `chat-widget-embed.html`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Custom Branding

Update the header text and logo in the HTML:

```html
<div class="chat-header">
    <h3>Your Company Name</h3>
    <!-- Add your logo here -->
</div>
```

### Custom Initial Message

Modify the `addInitialMessage()` method in the JavaScript:

```javascript
addInitialMessage() {
    const initialMessage = {
        type: 'bot',
        text: 'Your custom welcome message here!',
        options: ['Option 1', 'Option 2', 'Option 3']
    };
    
    this.addMessage(initialMessage);
}
```

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Security Considerations

- The widget runs in an isolated iframe
- No access to the parent website's DOM or data
- Secure communication with your API backend
- HTTPS recommended for production use

## Troubleshooting

### Widget Not Appearing

1. Check if the iframe URL is correct
2. Verify the z-index value (should be high enough)
3. Ensure no CSS is hiding the iframe

### API Connection Issues

1. Verify the API URL is correct
2. Check CORS settings on your backend
3. Ensure the API endpoint is accessible

### Styling Conflicts

1. The widget uses isolated CSS to prevent conflicts
2. If issues persist, increase the z-index value
3. Check for conflicting CSS on the parent website

## Support

For technical support or customization requests, please contact your development team or refer to the Lead AI documentation.

## License

This widget is provided as-is for use with Lead AI services. Please ensure compliance with your service agreement and applicable laws.
