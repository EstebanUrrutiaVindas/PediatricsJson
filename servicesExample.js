export const servicesExample = [ 
    {
        Id: 1,
        color: "#FFD700", // Color del servicio (igual al del horario)
        name: 'Servicio #1', // Nombre del servicio
        description: "Descripción del servicio #1", //Descripción breve del servicio
        duration: 2, // Duración en bloques de 30 minutos del servicio
        price: 10000, 
        offices: [
            {Id:1, name:"OFFICE #1"}],
        schedule: {
            start: "00:00", // Inicio del día
            end: "10:59", // Fin del día
            background: "#FFD700", // Color
            allDay: false, // Si es todo el día
            recurring: {  // Si es recurrente
                repeat: "weekly",  // Frecuencia de recurrencia (daily, weekly, monthly, yearly)
                weekDays: ["MON", "WED", "FRI"], // Si es weekly, días de la semana (MO, TU, WE, TH, FR, SA, SU)
            },
        },
    },
    {
        Id: 2,
        color: "#FFD700", // Color del servicio (igual al del horario)
        name: 'Servicio #2', // Nombre del servicio
        description: "Descripción del servicio #2", //Descripción breve del servicio
        duration: 3, // Duración en bloques de 30 minutos del servicio
        price: 20000, 
        offices: [
            {Id:1, name:"OFFICE #1"},
            {Id:2, name:"OFFICE #2"}],
        schedule: {
            start: "00:00", // Inicio del día
            end: "23:59", // Fin del día
            background: "#FFD700", // Color
            allDay: false, // Si es todo el día
            recurring: {  // Si es recurrente
                repeat: "weekly",  // Frecuencia de recurrencia (daily, weekly, monthly, yearly)
                weekDays: ["TUE", "WED", "THU"], // Si es weekly, días de la semana (MO, TU, WE, TH, FR, SA, SU)
            },
        },
    }        
]