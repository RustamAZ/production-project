import { fireEvent, screen } from '@testing-library/react';
import { renderWihTranslation } from 'shared/lib/tests/renderWihTranslation/renderWihTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('test render', () => {
        renderWihTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test render', () => {
        renderWihTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
