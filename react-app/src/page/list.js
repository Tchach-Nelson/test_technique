import React, { useState, useEffect } from 'react';

function List() {
    const [tasks, setTasks] = useState([]); 

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/tasks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des tâches');
            }
            const taskData = await response.json();
            setTasks(taskData);
        } catch (error) {
            console.error(error);
        }
    };

    // Fonction pour supprimer une tâche
    const deleteTask = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            try {
                const response = await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Erreur lors de la suppression de la tâche');
                }
                // Mettre à jour l'état pour retirer la tâche supprimée
                setTasks(tasks.filter(task => task.id !== id));
            } catch (error) {
                console.error(error);
            }
        }
    };

    // Utilisez useEffect pour récupérer les tâches lors du premier rendu
    useEffect(() => {
        fetchTasks();
    }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois

    return (
        <div>

            <div className="bg-dark py-3">
                <h3 className="text-white text-center">Gestionnaire de Tache</h3>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-md-10 d-flex justify-content-end">
                        <a href="/create" className="btn btn-dark">Create</a>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card border-0 shadow-lg my-3">
                            <div className="card-header bg-dark">
                                <h3 className="text-white">Tâches</h3>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Utilisateur</th>
                                            <th>Titre</th>
                                            <th>Description</th>
                                            <th>Date d'échéance</th>
                                            <th>Complétée</th>
                                            <th>Date de création</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map((task) => (
                                            <tr key={task.id}>
                                                <td>{task.id}</td>
                                                <td>{task.user_id}</td>
                                                <td>{task.title}</td>
                                                <td className="description-cell">{task.description}</td>
                                                <td>{task.due_date}</td>
                                                <td>{task.is_completed ? 'Oui' : 'Non'}</td>
                                                <td>{task.created_at}</td>
                                                <td>
                                                    <a href="" className="btn btn-dark">Edit</a>
                                                    {/* Appel à la fonction de suppression */}
                                                    <button 
                                                        className="btn btn-danger" 
                                                        onClick={() => deleteTask(task.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
