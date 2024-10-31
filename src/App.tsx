import Accordion from './components/Accordion';

function App() {
  const data = [
    {
      id: 'accordion-1',
      title: 'Accordion Title 1',
      content: 'Accordion Content 1'
    },
    {
      id: 'accordion-2',
      title: 'Accordion Title 2',
      content: 'Accordion Content 2'
    },
    {
      id: 'accordion-3',
      title: 'Accordion Title 3',
      content: 'Accordion Content 3'
    },
    {
      id: 'accordion-4',
      title: 'Accordion Title 4',
      content: 'Accordion Content 4'
    }
  ];

  return (
    <div className="w-full h-screen">
      <div className="bg-slate-200 w-[300px] flex flex-col gap-8 py-8">
        {data.map(item => {
          return (
            <Accordion
              key={item.id}
              ariaControls={item.id}
              id={item.id}
              wrapperElement="div"
              className="mx-6"
            >
              <Accordion.Item
                id={item.id}
                wrapperElement="div"
                className="flex flex-col gap-2"
              >
                <Accordion.Header
                  wrapperElement="div"
                  className="flex items-center gap-4 justify-between text-slate-800"
                  title={item.title}
                >
                  <Accordion.Trigger wrapperElement="button" className="text-slate-600" />
                </Accordion.Header>
                <Accordion.Content
                  ariaControls={item.id}
                  wrapperElement="div"
                  className="text-slate-700"
                >
                  {item.content}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default App;
