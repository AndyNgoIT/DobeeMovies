export const addMovie = movie => (
    {
        type: 'add_movie',
        payload: {
            movie
        },
    }
)

export const removeMovie = movie => (
    {
        type: 'remove_movie',
        payload: {
            movie
        },
    }
)