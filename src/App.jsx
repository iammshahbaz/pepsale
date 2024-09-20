import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { setBlocks } from './redux/actions/blockActions';
import { blocks } from './mockData/blocks';
import Swimlane from './components/Swimlane/Swimlane';
import Filter from './components/Filter/Filter';
import BlockPreview from './components/BlockPreview/BlockPreview';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const blockData = useSelector((state) => state.block.blocks);
    const [filterText, setFilterText] = useState('');
    const [selectedBlock, setSelectedBlock] = useState(null);

    useEffect(() => {
        dispatch(setBlocks(blocks));
    }, [dispatch]);

    const filteredBlocks = blockData.filter((block) =>
        block.title.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleBlockClick = (blockId) => {
        const block = blockData.find((b) => b.id === blockId);
        setSelectedBlock(block);
    };

    const handleClosePreview = () => {
        setSelectedBlock(null);
    };

    return (
        <div className="app">
            <Filter filterText={filterText} onFilterChange={setFilterText} />
            <div className="swimlanes">
                <Swimlane
                    lane={{ id: 'lane1', title: 'Lane 1', blocks: filteredBlocks }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e, laneId) => {}}
                    onBlockClick={handleBlockClick}
                />
                {/* Add more Swimlanes as needed */}
            </div>
            {selectedBlock && (
                <BlockPreview block={selectedBlock} onClose={handleClosePreview} />
            )}
        </div>
    );
};

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
