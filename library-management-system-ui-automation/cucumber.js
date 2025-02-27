module.exports ={
    default:{
        formatOptions:{
            "snippetInterface": 'async-await'
        },
        require:[
            './steps/*.steps.js',
        './support/*.js'],
        paths:['./features/*.feature'],
        format:['progress'],
        dryRun: false,
    }
}
