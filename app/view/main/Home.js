/*
 * File: app/view/NavigationViewHome.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.main.Home', {
    extend: 'Ext.navigation.View',
    alias: 'widget.navigationviewhome',

    requires: [
        'Ext.Container'
    ],

    config: {
        title: 'ИАГ София',
        cls: 'maincss',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'container',
                title: 'Начало',
                // centered: true,
                // hidden: false,
                html: '<h2>system.iag bg</h2><img src="resources/images/logo.jpg"></img><p><h3>Контролни горски марки</p></h3>',
                styleHtmlContent: true,
                hideOnMaskTap: false,
                modal: false
            }
        ]
    }

});