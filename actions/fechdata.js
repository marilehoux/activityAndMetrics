export function fetchData() {
    
    
        const fetchData = async () => {
              try {
                  const fetchAndSetData = async (url, setter) => {
                  const response = await fetch(url);
                  const data = await response.json();
                  setter(data);
              
              };
  
              await Promise.all([
                  fetchAndSetData('https://api.pebble.solutions/v5/activity', setActivities),
              ]);
              } catch (error) {
                  console.error('Erreur lors de la récupération des données:', error, error.message);
              }
        };
  
      fetchData();
      
}