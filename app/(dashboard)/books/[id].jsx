import { StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
//  themed Components
import ThemeView from '../../../components/ThemeView'
import ThemedText from '../../../components/ThemeText'
import { useBooks } from '../../../hooks/useBooks'
import ThemeLoader from '../../../components/ThemeLoader'
import ThemedCard from '../../../components/ThemeCard'
import Spacer from '../../../components/Spacer'
import ThemedButton from './../../../components/ThemeButton';

const BookDetails = () => {
    const [book, setBooks] = useState(null)
    const { id } = useLocalSearchParams();
    const { fetchBooksById } = useBooks();
    const handleDelete = async () => {
        await deleteBook(id)
        setBooks(null)
        router.replace('/books')
    }

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBooksById(id)
            setBooks(bookData);
        }
        loadBook();
    }, [id])

    if (!book) {
        return (
            <ThemeView safe={true} style={styles.container}>
                <ThemeLoader />
            </ThemeView>
        )
    }
    return (
        <ThemeView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                {console.log(book, 'hellloooooooooooooooooooooooooooo')}
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book description:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>

            <ThemedButton onPress={handleDelete} style={styles.delete}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
            </ThemedButton>
        </ThemeView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20
    }
})