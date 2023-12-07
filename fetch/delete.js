export function itemDelete (id , type) {
            const response =  fetch('https://api.pebble.solutions/v5/'+type+'/'+id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response){
                console.table(response, 'response');
                console.log(response.status, 'responseStatus');
                let data =  response.json();
                console.log(data, 'data');
                console.log(data.status, 'data');
                console.table(data, 'datatable');

            }
            else if (error)	{
                console.error('Erreur lors de la récupération des données:', error);
            }
        // else (error) {
        // 	console.error('Erreur lors de la récupération des données:', error);
        
        // finally {
        // 	console.log('ok');
        // }
    }	
