// Lead AI Chat Widget Embed Script
// Add this script to your website to embed the chat widget

(function() {
    'use strict';
    
    // Configuration options
    const config = {
        apiUrl: 'https://1db24.lead-ai-chatbot-a801.c66.me',
        primaryColor: '#6366f1',
        position: 'bottom-right', 
        widgetUrl: 'https://updated-chatbot-mauve.vercel.app/chat-widget-embed.html'
    };

    // Create iframe element
    function createWidgetIframe() {
        const iframe = document.createElement('iframe');
        iframe.src = config.widgetUrl;
        iframe.style.cssText = `
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
            overflow: hidden;
            pointer-events: auto;
        `;
        
        // Set position based on config
        if (config.position === 'bottom-left') {
            iframe.style.left = '20px';
            iframe.style.right = 'auto';
        } else if (config.position === 'top-right') {
            iframe.style.top = '20px';
            iframe.style.bottom = 'auto';
        } else if (config.position === 'top-left') {
            iframe.style.top = '20px';
            iframe.style.bottom = 'auto';
            iframe.style.left = '20px';
            iframe.style.right = 'auto';
        }
        
        iframe.id = 'lead-ai-chat-widget';
        iframe.title = 'Lead AI Chat Widget';
        iframe.allow = 'microphone';
        
        return iframe;
    }

    // Initialize widget
    function initWidget() {
        // Check if widget already exists
        if (document.getElementById('lead-ai-chat-widget')) {
            return;
        }

        // Create and append iframe
        const widgetIframe = createWidgetIframe();
        document.body.appendChild(widgetIframe);

        // Add hover effects
        widgetIframe.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 20px 25px -5px rgba(99, 102, 241, 0.5)';
        });

        widgetIframe.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 10px 25px -5px rgba(99, 102, 241, 0.4)';
        });

        // Handle iframe load
        widgetIframe.addEventListener('load', function() {
            console.log('Lead AI Chat Widget loaded successfully');
            
            // Ensure the iframe maintains its circular shape
            this.style.overflow = 'hidden';
        });

        // Handle iframe errors
        widgetIframe.addEventListener('error', function() {
            console.error('Failed to load Lead AI Chat Widget');
        });

        // Handle iframe resize messages from the widget
        window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'chat-widget-resize') {
                if (event.data.isOpen) {
                    // Chat is open - expand iframe to show full chat
                    widgetIframe.style.width = '400px';
                    widgetIframe.style.height = '620px';
                    widgetIframe.style.borderRadius = '20px';
                } else {
                    // Chat is closed - shrink back to just the icon
                    widgetIframe.style.width = '64px';
                    widgetIframe.style.height = '64px';
                    widgetIframe.style.borderRadius = '50%';
                }
            }
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }

    // Expose configuration for external use
    window.LeadAIChatWidget = {
        config: config,
        reinit: initWidget
    };

})();