const mongoose = require('mongoose')

const defaultLightColorScheme = {
    primary: '#079263',
    text: '#110011',
    background: '#ffffff',
    background2: '#f6f6f6',
    cornerRadius: '#dcdcdc',
    warning: '#ec5453',
    status: '#e2e2e2',
    status1: '#f4b1a9',
    status2: '#b7ceff',
    status3: '#b7f8ff',
}

const defaultDarkColorScheme = {
    primary: '#079263',
    text: '#ffffff',
    background: '#261e35',
    background2: '#2e293e',
    cornerRadius: '#403a54',
    warning: '#ec5453',
    status: '#e2e2e2',
    status1: '#f4b1a9',
    status2: '#b7ceff',
    status3: '#b7f8ff',
}

const workspaceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    lightColorScheme: {
        type: Object,
        default: defaultLightColorScheme
    },
    darkColorScheme: {
        type: Object,
        default: defaultDarkColorScheme
    },
    selectedTheme: {
        type: String,
        default: 'light'
    },
    weekStartOn: {
        type: String,
        default: 'Monday'
    },
    dateFormat: {
        type: String,
        default: 'YYYY-MM-DD',
    },
    timeFormat: {
        type: String,
        default: '12 Hours',
    },
    daysOff: {
        type: Array,
        default: ['Saturday','Sunday']
    },
})

module.exports = mongoose.model('Workspaces', workspaceSchema)