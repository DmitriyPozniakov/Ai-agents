document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.category-section');
    const agents = JSON.parse(localStorage.getItem('agents'));

    if (!agents || !Array.isArray(agents)) {
        sections.forEach(section => {
            section.querySelector('.agents').innerHTML = '<p>No agents found.</p>';
        });
        return;
    }

    const backgrounds = [
        'url("images/lar-1.png")',
        'url("images/lar-2.png")',
        'url("images/lar-3.png")',
        'url("images/lar-4.png")'
    ];

    sections.forEach(section => {
        const category = section.getAttribute('data-category');
        const container = section.querySelector('.agents');

        const filteredAgents = agents.filter(agent => {
            if (Array.isArray(agent.category)) {
                return agent.category.includes(category);
            }
            return agent.category === category;
        });

        if (filteredAgents.length === 0) {
            container.innerHTML = `<p>No agents found for ${category}.</p>`;
            return;
        }

        filteredAgents.forEach((agent, index) => {
            const agentCardLink = document.createElement('a');
            agentCardLink.href = `agent.html?name=${encodeURIComponent(agent.name)}`;
            agentCardLink.className = 'agent-card-link';

            const agentCard = document.createElement('div');
            agentCard.className = 'agent-card';
            agentCard.style.backgroundImage = backgrounds[index % backgrounds.length];
            agentCard.style.backgroundRepeat = 'no-repeat';
            agentCard.style.backgroundPosition = 'center';
            agentCard.style.backgroundSize = 'cover';

            const name = document.createElement('h2');
            name.textContent = agent.name;
            agentCard.appendChild(name);

            const workflowsTitle = document.createElement('p');
            workflowsTitle.className = 'workflows';
            workflowsTitle.textContent = 'Workflows';
            agentCard.appendChild(workflowsTitle);

            for (let i = 1; i <= 3; i++) {
                if (agent[`workflow_${i}`]) {
                    const workflow = document.createElement('p');
                    workflow.textContent = agent[`workflow_${i}`];
                    workflow.className = 'workflows-item';
                    agentCard.appendChild(workflow);
                }
            }

            agentCardLink.appendChild(agentCard);
            container.appendChild(agentCardLink);
        });

        // Добавляем класс прокрутки
        container.classList.add('scrollable-container');

        // // Показываем стрелки, только если агентов больше 3
        // if (filteredAgents.length > 3) {
        //     const scrollLeftBtn = document.createElement('button');
        //     scrollLeftBtn.textContent = 'Previous';
        //     scrollLeftBtn.className = 'scroll-button left';
        //     scrollLeftBtn.addEventListener('click', () => {
        //         container.scrollBy({ left: -330, behavior: 'smooth' });
        //     });

        //     const scrollRightBtn = document.createElement('button');
        //     scrollRightBtn.textContent = 'Next';
        //     scrollRightBtn.className = 'scroll-button right';
        //     scrollRightBtn.addEventListener('click', () => {
        //         container.scrollBy({ left: 330, behavior: 'smooth' });
        //     });

        //     // Обертка для кнопок
        //     const buttonWrapper = document.createElement('div');
        //     buttonWrapper.className = 'scroll-buttons-container'; // CSS class for flex

        //     buttonWrapper.appendChild(scrollLeftBtn);
        //     buttonWrapper.appendChild(scrollRightBtn);
        //     section.appendChild(buttonWrapper);
        // }

    });
});
