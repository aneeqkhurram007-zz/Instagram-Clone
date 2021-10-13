import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';
const Stories = () => {
    const [suggestion, setSuggestion] = useState([])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }))
        setSuggestion(suggestions)
    }, [])
    return (
        <div>
            {suggestion.map(profile => (
                <Story key={profile.id} img={profile.avatar}
                    username={profile.username} />
            ))}
        </div>
    )
}

export default Stories
