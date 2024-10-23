import Accordion from './components/Accordion';

function App() {
  const data = [
    {
      id: 1,
      title: 'Accordion Title 1',
      content: 'Accordion Content 1'
    },
    {
      id: 2,
      title: 'Accordion Title 2',
      content: 'Accordion Content 2'
    },
    {
      id: 3,
      title: 'Accordion Title 3',
      content: 'Accordion Content 3'
    },
    {
      id: 4,
      title: 'Accordion Title 4',
      content: 'Accordion Content 4'
    }
  ];

  return (
    <div className="w-full h-screen">
      <div className="w-[280px] bg-slate-200 flex flex-col p-4">
        {data.map(item => (
          <Accordion
            key={item.id}
            ariaControls={`accordion-${item.id}`}
            wrapperClasses="flex flex-col mx-2 my-3"
            headerClasses="flex justify-between gap-8"
            titleClasses="text-slate-800 text-lg font-bold"
            triggerClasses="text-slate-600 font-semibold"
            contentWrapperClasses="mt-2 overflow-hidden transition-all duration-200 ease-in-out"
            contentClasses="text-slate-700 overflow-hidden"
            title={item.title}
          >
            {item.content}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default App;
