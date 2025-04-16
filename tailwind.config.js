export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], 
        theme: {
        extend: {
            scrollBehavior: ['smooth'],
            animation: {
                "spin-slow": "spin 10s linear infinite",
            }
        }
    }, 
    plugins: []
};