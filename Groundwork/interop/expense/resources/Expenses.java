import java.util.Calendar;

/**
 * Created by arthur on 11/08/17.
 */

public class Expenses {
    private Calendar date;
    private int amountDollars;
    private int amountCents;
    private String merchantName;
    private String category;

    public Expenses(String dateString, int amountDollars, int amountCents, String merchantName, String category) {
        this.date = Calendar.getInsatance();
	this.date.setTime(new SimpleDateFormat("yyyy-MM-dd").parse(dateString));

        this.amountDollars = amountDollars;
        this.amountCents = amountCents;
        this.merchantName = merchantName;
        this.category = category;
    }

    public int amountInCents() {
        return this.amountDollars * 100 + this.amountCents;
    }

    public Calendar getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date = date;
    }

    public int getAmountDollars() {
        return amountDollars;
    }

    public void setAmountDollars(int amountDollars) {
        this.amountDollars = amountDollars;
    }

    public int getAmountCents() {
        return amountCents;
    }

    public void setAmountCents(int amountCents) {
        this.amountCents = amountCents;
    }

    public String getMerchantName() {
        return merchantName;
    }

    public void setMerchantName(String merchantName) {
        this.merchantName = merchantName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
