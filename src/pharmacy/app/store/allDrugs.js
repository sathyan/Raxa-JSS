Ext.define('RaxaEmr.Pharmacy.store.allDrugs', {
    extend: 'Ext.data.Store',
    id: 'allDrugs',
    fields: [{name: 'text', type: 'string', mapping: 'name'}],
    autoLoad: true,
    autoSync: false,
    proxy: {
        type: 'rest',
        url: HOST + '/ws/rest/v1/drug?v=full',
        headers: Util.getBasicAuthHeaders(),
        reader: {
            tyep:'json',
            root: 'results'
        }
    }
});