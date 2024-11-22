/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    views: [
        'MyApp.view.HomeView',
        'MyApp.view.main.Home',
        'MyApp.view.main.ByName',
        'MyApp.view.main.ByNoKgm',
        'MyApp.view.main.About',
        // 'LoginView',
        // 'UsersKgmDetailsView',
        // 'UsersKgmDetailsCard',
        // 'KgmUserResultView'
    ],

    // The name of the initial view to create.
    mainView: 'MyApp.view.HomeView'
});
