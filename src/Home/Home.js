import React from "react";

const Home =(props)=>{
    const txtstyle={
        backgroundImage:"linear-gradient(120deg, rgb(46, 70, 148) 0%, #326c92 100%)",
        color:"black",        
        textAlign:"center",
        fontDisplay:"block",
        border:"2px red"
    };
    return(
        <div className="Home"
        style={txtstyle}>
            <p>Η "Πρωτοβουλία Γειτονιάς της Αλεξάνδρου Σβώλου" ιδρύθηκε τον Δεκέμβριο του 2013 από μία ομάδα δραστήριων κατοίκων της πόλης μας. Αν και τις τελευταίες δεκαετίες ο δρόμος και η ευρύτερη Γειτονιά μας αποτέλεσε ενεργό κομμάτι του ιστορικού και εμπορικού κέντρου της πόλης, οι επιπτώσεις της οικονομικής κρίσης είχαν αρχίσει να εκδηλώνονται ραγδαία, δημιουργώντας μία εικόνα κοινωνικής και εμπορικής εγκατάλειψης. Έτσι λοιπόν μαζευτήκαμε άνθρωποι από διαφορετικές ιστορικές διαδρομές που γνωριζόμασταν στην γειτονιά σε επίπεδο καθημερινών συναναστροφών με σκοπό να αναζητήσουμε έναν τρόπο με τον οποίο η Γειτονιά μας θα γίνονταν πιο ζωντανή, δημιουργική και ευχάριστη, προτάσσοντας την ατομική ευθύνη αλλά και την συλλογική ευαισθησία απέναντι στα κοινά. Τότε πιστέψαμε ότι στην κατάσταση που ζούμε στην Θεσσαλονίκη αλλά και στην Ελλάδα γενικότερα, οι πρωτοβάθμιές δομές αλληλεγγύης και εμπιστοσύνης πρέπει να ξεκινήσουν από ένα πρότυπο μοντέλο και πλαίσιο οργάνωσης: την Γειτονιά. Έτσι με αυτό τον τρόπο θα μπορέσουμε να επαναφέρουμε αξίες και ιδανικά που ξεχάσαμε κατά τη διάρκεια των ετών του άκρατου ατομικισμού και καταναλωτισμού, χτίζοντας από την αρχή νέες οριζόντιες κοινωνικές δομές αλληλεγγύης και συμμετοχής.
Η οργάνωση έγινε αρχικά μέσω του διαδικτύου. Έτσι λοιπόν δημιουργήσαμε την ομάδα στο Facebook ‘Σβώλου: Αλλάζουμε τη ζωή μας’ και τώρα τη νέα μας σελίδα: "Η Γειτονιά της Αλεξάνδρου Σβώλου" με σκοπό να διοχετεύσουμε τις ιδέες μας στο ευρύτερο κοινό αλλά και οι ενδιαφερόμενοι να συμβάλουν από κοινού στην συνδιαμόρφωση των δράσεων. Για αυτό τον λόγο πραγματοποιούνται ανά τακτά χρονικά διαστήματα ανοικτές συνελεύσεις στην Δημοτική βιβλιοθήκη όπου ο καθένας είναι ελεύθερος να μοιραστεί τις σκέψεις του, τις ιδέες και τα όνειρα του για την Γειτονιά. Η πρωτοβουλία με το πέρασμα του χρόνου μεγάλωσε και ένα ιδιαίτερο αλλά συνάμα ελκυστικό κράμα κατοίκων, μαγαζατόρων, ερευνητών, καλλιτεχνών και φοιτητών ήρθαν πιο κοντά μεταξύ τους και αγκάλιασαν ενεργά την πρωτοβουλία. Ο στόχος μας;
Να ξαναγίνουμε γειτονιά!
Κατ’ επέκταση, γίνεται κατανοητό ότι ονειρευόμαστε την αναβίωση της έννοιας της Γειτονιάς ως απάντηση στην οικονομική κρίση που έκδηλα δημιουργεί μία διαρκή ανασφάλεια και φόβο με την παράλληλη αύξηση του ατομικισμού ως φαινόμενο της σύγχρονης εποχής.
H πρώτη δράση μας ήταν το ‘Δείπνο της Άνοιξης’ το οποίο πραγματοποιήθηκε για πρώτη φορά τον Απρίλιο του 2014 και αποτέλεσε το εναρκτήριο λάκτισμα για την εδραίωση και εμπέδωση των δράσεων μας στην Γειτονιά. Η ιδέα πίσω από το Δείπνο, δημιουργήθηκε από αντίστοιχες γιορτές που πραγματοποιούνται στην πόλη της Βαρκελώνης όπου οι γείτονες στρώνουν γιγάντια τραπέζια στους δρόμους και μοιράζονται το φαγητό τους, ενώ παράλληλα τρέχουν και άλλες εκδηλώσεις καλλιτεχνικής φύσεως. Μέχρι σήμερα πιστεύουμε ότι η μετουσίωση αντίστοιχων πρωτοβουλιών μπορούν να δημιουργήσουν ένα domino effect το οποίο θα διευρύνεται από το ένα event στο άλλο ενδυναμώνοντας παράλληλα τους κοινωνικούς δεσμούς και δημιουργώντας παράλληλα μία καινούργια σχέση με τον δημόσιο χώρο… τον καθρέπτη της ψυχής αυτής της πόλης, σεβόμενοι πάντα την πολυμορφία και διαφορετικότητα μας. Έτσι δημιουργήσαμε ένα πιο γόνιμο έδαφος για την πραγματοποίηση διάφορων δράσεων στην γειτονιά οι οποίες συνεχιστήκαν μέχρι και τον επόμενο χρόνο με τον παράλληλο εμπλουτισμό των δράσεων μας. Αναφορικά, πραγματοποιήθηκαν συναυλίες, δράσεις στα σχολεία και στον δημόσιο χώρο, καλλιτεχνικές παρεμβάσεις κ.α.
Μετά τις πρώτες δράσεις παρατηρήσαμε μία αξιόλογη αλλαγή σε επίπεδο καθημερινών σχέσεων ενώ διαφορετικοί άνθρωποι βρέθηκαν πιο κοντά, σπάζοντας την αρχική απομόνωση και δυσπιστία μέσω της ενεργής συμμετοχής στην πρωτοβουλία. Ουσιαστικά οι δράσεις μας δημιούργησαν ένα δίκτυο μεταξύ γειτόνων και καταστηματαρχών που δεν γνωρίζονταν προηγουμένως. Οι τελευταίοι ένωσαν τις δυνάμεις τους σκοπεύοντας στην ανάδειξη της γειτονιάς σε πιλοτικό μοντέλο κοινωνικής οργάνωσης και στην καθιέρωση πιο μόνιμων δραστηριοτήτων. Μετά την εμπειρία 2 χρόνων εντοπίσαμε ότι η κατάσταση ουσιαστικά πριν και μετά τις πρώτες δράσεις, έχει να κάνει με το γεγονός ότι οι κοινωνικές σχέσεις μεταξύ των κατοίκων που προηγουμένως δεν είχαν καμία σχέση, ενισχύθηκαν, δημιουργώντας μία καινούργια λογική κοινωνικής ασφάλειας, προσδίδοντας μεγαλύτερη εμπιστοσύνη στις σχέσεις μεταξύ των ανθρώπων που προηγουμένως ήταν δυνητικά καχύποπτοι.
Παρόλα αυτά, μετά από την εμπειρία μας αναγνωρίσαμε ότι το κτίσιμο της γειτονιάς μας είναι μία διαρκή υπόθεση που εναπόκεινται στην ενεργό συμμετοχή καθώς η οποιαδήποτε αλλαγή προϋποθέτει μία κοινωνική ωριμότητα που ξεκινάει από την διαρκή αναθεώρηση του ίδιου μας του εαυτού. Για αυτό το λόγο επιλέξαμε να συνεχίσουμε τις δράσεις με σκοπό την δημιουργία ενός ώριμου κοινού και μόνιμου πλαισίου το οποίο σε καθημερινή βάση θα παράγει και θα αναπαράγει ιδέες και δράσεις οι οποίες θα απαντάνε στις ατομικές μας ανάγκες και θα δίνουν λύσεις στα προβλήματα της γειτονιάς μας. Αυτή η κοινωνική ωριμότητα αποτελεί ζωτικό στοιχείο για την επίτευξη της κοινωνικής οργάνωσης που θα σπάει τα δεσμά της απομόνωσης, προτάσσοντας εναλλακτικές δομές οργάνωσης και συντροφικότητας. Σκοπός μας είναι να συνεχίσουμε τη συλλογική μας προσπάθεια ώστε να αναδειχθεί ο δρόμος μας ως πιλοτικό μοντέλο κοινωνικής δράσης και συνοχής. Να ξαναγίνουμε Γειτονιά.
Και το πείραμα της Σβώλου συνεχίζεται... </p>
        </div>

        
    );



}
export default Home;