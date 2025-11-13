import React, { useState } from 'react';
import Header from "../../../components/Header/Header.tsx";
import Sidebar from "../../../components/Sidebar/Sidebar.tsx";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import type Product from '../../../interfaces/Product';

const ProviderProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            nombre: 'Café Orgánico Premium',
            descripcion: 'Café de altura cultivado de manera orgánica',
            precio: '$250.00',
            categoria: 'Agrícola',
            imagen: 'data:image/jpeg;base64,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'
        },
        {
            nombre: 'Azúcar Morena Artesanal',
            descripcion: 'Azúcar morena de producción artesanal',
            precio: '$45.00',
            categoria: 'Agrícola',
            imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUUExMWFRUXGR0aGBgYGB0dHRseHx4YGB0dGh0aHSggHxolHxcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADwQAAECBQMCBAQFAwQCAQUAAAECEQADBCExBRJBUWETInGBBjKR8EKhscHRFCPhFVJicjPxByRDgqKy/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQIDAAQF/8QAIhEAAgMAAgMBAQEBAQAAAAAAAAECESESMQNBUWEicTIT/9oADAMBAAIRAxEAPwBhPmMIQr/uTQnhNzBupVG1JMV6XI2pc5NzHyz7iCp6gBCeajxJoSMC5gnUqhgTFmh0hA3nKrxwh4BSAOIXzphWraOYOq12MCUKMq+kScg1Ng0JtXnOQhOTaGlRMAELNFk+JNMw/KmwhOHGm0TBMsc5j6BRSgiWE9IwkgkzUtkm0b9KLB4DPyC/UJmxcuYPwqY+htGjCgQDGe1OW6COog7Q6nfKSeRY+1oYSp0efyxyxNrI2TwrgljBu+xPaI/EkrcHEQ02YFIB+sElpcHgupaZUyY6h5cxoJUsJFo8SkAYhdJ1tJUEqG0ktGaqPZo7l0NJ5ADnEI9RTLUN2CMd4J1achadm4fWMjUVK0KZXmSMRHlkX4ojWqUna6AARzC8Vykq32xHTkFUtJSHJgSfQhMrx1k7RYpdrxnrNlSKP64r3HLX9e0CCsW4tkxXL1FKZeA5Nv8AMerqkqO9PziyR3xaKiheDKvqEnyqSQ4dsX6mJq1RKZKQlKSE5MKXmpHiLVuVhROOjW4EU6nT2C0qccpENMmkFeORMJvtUzEgu5vaIrmrfaUKvj+SY46pN8n9tO0ADcOSP3jxGsFO/wAt2YHoeHjq0bwLRKUmWC4KVEsPyNuneAUp2lt25XAhRq+rTV7AAlCgzAWBe14OlUsyclBbYvDvkvl+ghcX2cmH6zp5UULALBgvixNrwvl0UwzNqS6BwTd+kMpVFUoBTOmjaLpSL7m/3dorladOMxwpg5KgzHt7Q3SBByqIzGRJRtWbqZViAOQeYFkoVTLUiYP7hF74fDRxXsKSqxvc5tzAkqqlhcwzQonb5CbuT19oFqOqgmq1BMqTeWliLdYV65JlLlIUkl2uHxCvWKlMw7UhTg44vDWi0ozUJlL8qiHCk/oY0iuOkPSip05OwLdkkfKb/SGnwqUn5rMLDEIqmWuVN8BarJs/aGSKAqsD6EHEdK6oUkx/8Vyx4TvdTC5jHKp5pxiLquXMSQFbldcmLZdUwukwK0hSHCR4s3/inPrDKewED0iAhA6m5j3eFCxBPSNG67JFe3xZwSMJzGisgQv0SUBuU2TBVbODGFsQCtqifLBsgAAekAUlLuJWccQbNUEpgS+nMErWW6d4Ta0HUstMqUlKejmFml0omzFLVdKbDuYYTpoSUlVg9/SOZw1+GEhU51EAjCTn1jcqj5/ValKVVyloKWAAG3knrGqqp61WdoORjJOwqpKTYmF+k1BlrWgXDuPeJS6cAOcwGlLTg3Igj3ZE/wDkb1e5YLhul4RSapSFFOOYf1E5k34jNahMCz4icpNx1EXJWjODphs+esiyrmEFfJVLm3UD1aGFSp5Z9HjLV9UtRDHaE8R55Hs8aH02rUFDADe/rFVSs+IQU7gbg8Hs0A0gQpRVMUxCX9ewi2ZqO8AJdwHHrE6XQcSZoYWbCR+8IaikmoXtWpxm+PpBMlawdxXzdh+sTrUp+ZSiRz1aO67FITUiAkuUOxy2Is8IhSimwObY7iLqWsQvc9hdgenX1i5U2UlJUHZ7X8xtFNnIlXrKChKT8yHPrj2zC+XJCiUusjgOwfkntFSqtK5qR5kglg4g7UaaVLBG51sNrKOSC4tZ/WO67A6TXJlIWUEKUHsQ4hVK1RC0K3MFHnF4qnhICmSQQL3i+XRSFoB2XSM9fURSivYNsu0vQROWmYpW5PTLtx0h5q8gSQm/zJt0H2/5Qh0TW1ISAkbkJJdHrz7Q5pKJM4BS1FUtzuz5R0AF+YmV3TFZpVSJ3JUrxtp/CTzi1uRCxGqTET33uUqcpN91v0viDdXopUucrwSQlCA4JJSVuXIGRZoTVcoBYWLlrqFs8MekUoqwu1ZpqOaiedymSA5G6zvxHfEEuQdiEpxcMc9c8YhHQFVgpTmxSDaD9Vr5MxghKt6XBU/PWDrDq9gX9EkrKj5AEtt5J6mGuj0HhgrKjjylRYJ625hcqcjxC3zJAz7O8e1uvGWgpKQoKuHNwcfSHW6AIrJonllkFZ83c/YDNFcohIulQAGcGENDImKdT4wScPBsmoURsUtxhn/WGS+ivwnPrEJDbjuOAMX7wdJp0hIcKUSHcQsraKXwX28PcxKk1UJSxeCswb+mknWDQj/ozOnAJJHUiDdRqLGGGh0+xG5XzGN2RQTLlpQNo4hdVHcoJHMG1S8wLpqHJX1sn+Ykf0LbAGBCvVZ3CcmwEMKiaw7wu0eV4k4rVcIx6wgNZckSpaUDpf1hZqkxw3W0MKqdyYWUyTMndkwIRh8PaclKpe7raN7sDu8YrxCjzDIxG2ppBUhKlWJDt0gZnPsqmGF860xB7w4/pRFEynAUD/tc37CJ6M30K/iSv2DbyYUUlWxcjP5wXrG2cXQXXyO0QoqLekpK/kfLAD1jn5FYrxfzpNNsYOP4jN61SqUyykhL3bMMaTWvDX5RuAuHEROohSi6RcWBxGc5L0beODXYroqhKAVEKIZurevaC9Kq5SlhIUE9dwaGP9fKlyVsEqUuxs23IxyYzlYtIDBhfJECZp2FVdWtU2aiWRtKgC2LRCZTiyfEC1LDsD8vYiPZ9KmSAlKglRSFODl4BmU6gjckpcqy/mw59ocODBKQ5OAmBUrTMO4EMCwfHeBplQtXkUCTxw/FzEV7pJlpmJKUrB2N25+scos61RdXrRKTvPznygehd/zzC6bWgpUpRZQHSx/zF2p1gIuEu7EZfp9ICn0alhIUTdnBGBGkUvZMn8IUE3ekHc5B81736Q0RX3MkJyPm6DGOogjQZEpCQkywSSDuGfSDNXq5BKkkDy23JAfFmDdYW4t0RqRVTz5CJG1RTvYoZi7lTgqOMfpFdNqPgE2CgUuBuLPgFTGxHSFVbUS1AEpJW3oAWYfpC+gq1qBSpQuXJID94FC02U3TobJ1ET1ebcHDeUth+YNpZqFS1gF13F2fH6wgRJTtUsL+UsBjH5wTMmIaxHmb69iMmFxXQJtsNFetPkCUlTgBbsEjqe8FUMlKVlbCxB6ueR+/tCnT64ISUAAOS9r9YtRUDf4iCxSRtBwGu8DQpj3VqWUoCokTCJrsuW1gD68Ql1HbPZTecWIgpC5kwq2naVADGSH+mY8naLNkpMwsSn5iDYP1jg/0E/p56JalAOhxbpAwSFrcBSVq7MPz4i2TqU5QYAFjxz6xoKmtSEhTJ3C79f4EU5V6BKzMVCVb0gqAIy1o1X+i04A/vILh7rjP0xEzctTAqvcY7DtF8ukDfP8Al7wOSQ8bJaZVeLNYjypzGrnVCQAxEKNJ0US0O7KVciI6qlaU4eNHVkf0iWo1BUQhOVW/kw1koCEgdBGQ0ZCtxmq3N+HOIcVOpbRl/WOaFSPdUn8D0HqYa0MgS5QSLk59YzGjT/GnOoeRHTrGmmVSfSBr0UpLsC1GazvxF+kU+xG7lV/4hWv+9NSgFwLmH05W0DtHdCMdEkCYt1HypP1MauZWpAtGK+Hpyt5AuMxpEyiYlsyl2EJrCVQp1zUErlqluB5kkl+AcWxeCZiilRSwAZ9xciMxVKRssrbMUdqg9/8AkW6evWMpPKKhHbBzWzkf+Pa7u557O8K1VsxanCSVklwzt1YQa8uWVIfewG0g22kG1vxdY80yT/cddgPmYe1v3MQsN/0KnFUgJISCGcKAy5Bu/IhbqE0hKZmFYAFyb9OIeV8ynWr+2o+QAB8OO1hAq6ZM0AbwVD5bcnqPyjsBYCo02aErJBUvLJazh8esXy9KM6WAtI3lixx7teD6BE1CwVghZYHlg2L2wMQPXzlomlcstexs5w7do66eHdme1rS5ktKFAgi7tlIHWEqaiY4U72YfYjTHU1qM1CifM72uXYkwlr9N2pCpZO4XKeAOPeNY/pDtBmlVq5v9pQSlRsVLLM1/q0F67LkqRLW8xZQPM+A3CO0JtI1VKwRNRZ/mA8wPF4q1CZLSpQ8QrLMkfeIuUXeERkvYPXICg6HfIcX9PaGYJW00EqBttwxxeA6bZJ8yzuAuGPJ6vBUqW0sAJW61bn/C2OvB7cwNlJaDaDKVOnrQolKUAm9g+HHbvDLSKeVvUJimI+R+Wd7+0X/D2n7Z+9aQoMAdxI9A/tCqsriVTkkIUXYHgXyOtgzwN8nh2rs0GmUlNNdIUGcuXFufQwpqtMlBRUgBgpixzxbtA1DXCX8xChcbeHcXsxuxMT1LUEhAlhI3BZO8WJBv+WIKkpDaa0op6uXJXNdNlEEPctgQJVmUQVILEG3vfHEFK8EsVqBWGy/F2vbs0U6vVoMxKkS9qfK5IZ+4HYfpGydsz6BdP0yevcuXLUoA3PFs+sESKoTQEKBSeO3b0jYaTqRCPDRt2guCpg3JJe38xka6WJJcqd3P5s/VmiVPmPHjpemqXJIIWA+AGgjWNTUULZZ84AULCz8vm0AyKbxPMzsMi/p7Qu1CWVKKQX2tYn+YYwTkEpYx3pk1CylDNwQn9YfU9DLQoODMTck9vSMfo9WZZb5ST9tGmn62BK2mWSt2KhZx1L+sRJNSwpNOJLU5gnKAQlKUpSw4xYW4No6mlsnP5QqoK5agEKIDHLN+cPET0gMAS33xBLXpUcQ3Wr8oS6nNKiEjKrD9zDKsmMlusAacHeYfRPpyY1RIUhISAkCwEL9VKW2sCTDGcpg/WAKBBmTSojyoue6uIRCdN0rwUAJLE3PrAesLWAcEAQ6mTS3rCSpQZq0oGFG//UZgQNfAbQKRaEGYpJdd/biCa+vKUs5f76w4nMAE8D7EKNQNjYEmwHUmwjrtncaRofgWQTumG5PGNo6l8xrdTpipHlPL+sZ/4I0ZKJZdRJDO5+7RrzLcMbD8R6AXJ+kZtXZm3xdiLWK8ypQl/KtQBKj0e2erRgq2nnTpwPL3wA57mznvD74hqFbyVAsCQl8kOSAAexgGrMtST4atymdV7hgA1+RGV2zaKpAFPJX4jKKQymUolOQ5Y8NY9sRfXVCAAoKWZlmIZgTm3PED1EkJATLUVPcg5vhm+7R2j05ExE2cp5Zdk9AzP2dQ+iYMZeoskgqYl/UAm7cgXuecRZVIUggJBBWC5IscMLPY3PsId6lToSlBQoTFKclQuwDWJSCxL894U1lYtTg+GJaCyUh3yz45d7wV+HKVhatQqZUtJUAfVIN+/BPSPEzQqUklOxZUQdxSR+WM2jzXdYSqn8NKCVH8RJZIHmJA/wB1usBf6kqfK3bEJU48wdlBypwm+bXeKr4Se16NymICSMkc479v1iubM2HbZmBcli4zt6u4aPKutALrQEpbLklLNnyuOb3j2auWuYEC6wkbSRln4+kK/R0Enydydz+Z7WdybAerQjoqSUneqoSvax2hOSXfMamZLV5kAEBSWIID5J3Yt/iMpXSpsqYuWHUwYNhsu2CCGjWHwxn+gIpzNUlO0kP+Ht1A/WH1RWTkSgGDg7QRliHY/TEBfD88o8xl+Ib2Ltly7ekOaWVKUtlHaCXBwEkk/wA5jvJLaZUEK6zUytPl3BX4ntf2Nzm8ZytmEEHBP39Y2Os6QkhRQyF4QkH5m6k2L9eXEI6arUoCX4YO0kk7bg4P5veL8bS1EeRN4C+FuSAgXZ2z3ikz1TClLEkHH6wZPnATfKkp6ve/SLJUkElQRbG5Is/LGKugJa94TIMtV283aCdMqJa3RN27MghL3AYeg/eAjRJKipSwprEKcEG5uIJ0DSVr37CNuLiz5DHrE4o9i7shI1ZRISE3Bb+B68Q7lS5KyTUyyFYZgyUk3Iu7tACqYy5h2y1Kmjn/AGs1/X1i7XaolYm7nAlgqt6P994h03he1pXPWszFypKQlCQGCHAI6kk9SPeFCtOny5h8V03cvkh2LtzDWhrUXmJu/B9LD76QJU65N8UbpaSBgH6e8aK7pESXtjqvTRrlJSgupKhccD16wrqaQEgIWVOzvxE6aplzgfKULcA7QAnaLkFg/wD7garpiAFS2ACbkHj+Yj3RS6sPkUi0qUAkq2s5bA+xDhE4G/hu/QsP0hVoNZUArIX5R8yVO6uGHseYL1SuRNWFJBSGAAFsfvEeRWVAKrVbyEjJt7cmGcuSAkAWDMIXUc0LIWAbDaHH6QxqVhCCeTYfvGqJYq1SeUuPYQxoZXhy0p/EbnuYT0MvxZ97iXc+vAh5MPJ9o5lIFrqjaCRngfrENOrfFZYl7Mhu3aAqp1qCB+It7cn76w88MJAAsB+giaEFqlnHWCJNNTql+IqakLSbJJvu4tCmvq9qVKMFU8qVuBSLpT5nHP8AMDvo41Pw9N2qI6gD3JjSVc7ZInKF1sEAd1W/R4zvwzJClAngv+X+Yo+KaY+I0vczblhJub2yWOccX6wOXHTKUeTozVTOWt0lZ3BJG4vYkXzjpHtMfCQgLlgqUm5Lgq3A3f3b2aFdXUJEs7ErCjl2AJex6+0T1KsnKCVlf/jSlJAxtB59zzGS6o3rSiuqdiwFOXDAK4IubDi7xWdRCZTHeopV5bDZfLuQX/niPZ1SFncgFPVSikd82bEXf6btbcfmBO1Vs3cdrg+8UuKWi7fRotAmNL3omcFJHzKdnY9D37Qm+IJRlTAN6VCZ5kshjly7kuP1izSdOO1apSkhiQCo2U9i7MWt9vHVehFUnxN6dyCHNmJFglhfHfEFKwTCdMWtUtW8OUhypRw7AADpYCPF1ksJLOFMQwYj16dIooWJWlZ8+1gEhy/vhgIXVE4AsClTOXH5DNzB2UOplOhMtzNTMWonysf0N3N7XgDXUECSUy9uxXmLu4sxZh3jqdM+YgTAnbL3EFRABVgEMXYBjdmMO5lGqdLYsdtiFbQXYEO2XsYq6IYukzfEKSgk7Q5OOXJci7CBdcBW04Of/tq5OCQ/TEe1VFOUpO0JG1jtuQSL83vj3gyT4i5dRL27FplmYwa5BszYZlD3hiqeETeCSTJfcCC6gVJGMAOW7scxbOlFUskkSwghmA75axhAmtuStTGzFn+nePZEyZMU77Sn/cPcFmjRwfZKmPKSkQqUVIP9xLuVKJt+EMSzX/KFumeREwrWxUkjaDnc43f+oBTKmlKwQfIfO124D9MGL6eomk7ihW0fLawZ7CFRasW7KtO07akHL8mHFApcpwEpKVOTc5dmI46x5pUxCVAzUKU7MkhgDlLgXdzzE9R1CaryhKQVqITtsUhww9frmCTbOSSAly0K8aZNG1RJG44w3lAuT27CGvwypaJCVSxtWL4dJ6Eg2Zu0LZtGqWQVuQC6m4vclu5ETRWqQFIcBJD7Tk34EEnawUtGVJNUkklVySVHLvc+oeEXxHK3bQlPk22ZrnnHtAkyumAbUEgbiTwzcP0hhS0JmAGYQD2Z9rP6f+4VFxfJhJpqkFaFQplIT4qSgr812uC209ubQplJV4pKkhTvtYu3T1xGl1JCUbUS1KmmwHiWIFrC7Nf2gRWnoTOSVFiCykt5fUkEu3aOUtbZzjiQPKKCCNoS4G0PY8OSGYuDaCZNAlEpRZRIcsDYgXNjk4gdOlklRSfKVHa4ctwe3p9Yt/1JcqXt3BW0mzC72Je/SD/BB1apuR5UlLEPycemHiynnhQcbmFsJES0whZWSS7ABIAsM+pNyIajTadYClAoOClunXvA2l0NNjbTaWw4AiudJM5RvYFgBFs+r2IYWPMINOnzlzlGWspAHm98D1i/8BoKlgUydoyVErJ5MX1lSCAx4vFU3TxySfW/rCuuUSRLGVW9B/6jop+xdVg10RG4qmnmyfSCaqcQD3idOPDlhI6Qq1GpABJhOKpI8WelOUy/Or1/CPrf2h+wF/rAHw7S7Ze9Q8y/Oew/CPp+sE1Kmv7/AMQHG0+FlAyvKL4Uf2EU/E2mk7pxukbUhsglw/ocRP4GWTTPb5yLdsv3f9IZ6osmTOSxO5FgMukhVu7AxMkmtMbado+P1lN4apjgqIIKTkpA5PYeVvWI1lNMmIWveygCpY4PSwYWH6wdqC0ImTBtJW4urPBubsL4gSu1BR5KiRbzWFiDjnBbi8ZJnpJU9IkyU7iV7mW7MQSkPYtYOx7x7TTEkAEsRdy/yj9rYi2kkIGJruAolnDhOEkO2fygOrkrSt1AMoMDbHQgdxC3ydHRVIdUhT5lIUUhVwzXTdLdnL3zFwpkpBQV7lLuggkMRzg+XAfvGa0+QqWsTNpCDkq67eSMDn6GGMwH/wAqS/TbkWwC+Hf6xMkKAKCcqXPUhQdS3SSeB1T16YFnhstISQpAvYBgDwHu5Y3iEhI2+OshDkJ2E+YHBBObk4i+XqdNITsUg7lAjcGKUOSb8tgsHMLd4g6JSdUKEK8QgOGIPuzg9C0QXUKUUzB8wGW4YB3wWw3/ACgSYqTOnqWEKMpgEqJfcoMCSOBkgdAIhOlLMwy3KUBTOBYskB2BDl3H0jq07K6Ll6o61pBdxucizuAQ/wB8w4+E6pE6eqWx3FKypRbzeVThnL3LvaFVPSISNgUzE5u93csOnA6QfpdKJNS6FBSmJSXYkD5gwe5DjuHio1ZHkviYvTwQuYgJBZRDs+Dg9MQTTy1Km7UlICVB9yrKa5S94Bm1JTVr+YedV0ljk9IPlUhQgLDhKlHNw7uc3e+Y2kZQHk7U6bxfElyzJlkELAZ8FyQMueB2gTTZ9gpDAE7tpFjy3YenSF86lNSUp3BCgXdRsRhhwMc9I6TMNMogJR3PzAnBYH6xm42rNFjoe1ZSb+V1XNj1cMeGsICl0aVL3lJCUpCmJDqUC7l24w3aAqBM2Y3mt+TAi7/tBMrUEpKgdq0g88EjKOou8QrRbr0Wapq0pStsvcEOyXF1Pl/Q8RZqWjIQAZa0qJKXAUGR813y4YfUjiL5OnSV06VK2+UnarcAoX5fP7Qs/wBSkHeFAScMyibNcuMntFL8If6U6hQgJUSokWCXzz+X8xZSaftZamWGdmJCR17C+YFn6sFbZaNyk9w2Az3vGq+HJ06ZJ2S0AK/8d8KT5lFw17gCFtpaOehENUQomWEJKh8q+vLszt1aPV6o9lywgpJIa4buW/aJVnw6inKDLUPE/wBpLnob4ilFOVqKSGOU7vqxtYEcwVF9CmwyoVLCUhatu5jtDmxwS3XPvAlPp0syitJSVX8pPOWvwIop6Jc0/LsAPmJxYsySP07Qzm//AE69xT86Qz4a17Ys0PWE96CUdSZCfDmJYFW6WpLEhXfqIK/1CcX3S5YL8i/5GKKhCFMFBL5ce49vSCZoUouFWwG7RMmmUo0T12sAB+/aCtHphLl3ybqPf/EK6WV404PdKPMrueBDtICQenSNusDsqqp7An39oXaJI8SYqar0H7/x7RXqc8kbRlRA/j77Q5pqbw0pQOBeOA9qFsDCCZL8aamVwTuX/wBB/JYQx1Ke1vsR3wzTuFTSLzT5eyE4+pcx3R34OFizY6wm1SeQC3sOpNgBDKdNa5xGemrVNqZKA4ZQWr0SQW/QRyRzZ9Q0OQiipUSiSVAblf8AZVz+cC1PxDsIUksUl+/3x7x7/SzJxJLpHJP7RDUKFCUHhvxDMZSbM0l7M/8AHTSZaleG6KgEomAFhuY3v8wc39LRkvh7ThO3K32QHZQsoizY/wAH6x9PoVS6imXRr2qJG6S5/GLlPZ7/AFMZPw5NP4iArYoCyQCSSQ7PjJb37Qy/mOex8bbbT9FUwhJSkOScDBUWdgGOGy2IWT5k4K86R1fg9f0v6xdpdeFVJnKSzWYXBF3B/M2hnU1W9YnLktLTuZJNgWSCVPY/K+AIzSN79CdNQJi0pUjalZCC1zy6j0Yc+kaPX9PkylI8JQ8gZSZd3tbep8km/pGb0OpUqfuW2xIJDpGVEliw+W8ELkpVOCdw2rsOA4B+oYQyXoF9ApqUbFpnWJZRBSebuCObHveL9F0L+oSpalNu+UEsyRgxKr03dOXKSSop2gKFySQMdM/nA2qVKpC0y5cxS0pYDcm4ULqRjg9YqnWA3pdRz1JlmRsCgXAXgsez/n/yEdqchQk3dipIJHe7vh7QVo1UJwmFY/ugMAwCQDf8PL8R05W6nVuLGWxbg3HHXj3iW9FLCvTdUSpe0oY5d8hixYcu1n5hxp1cU1KVoRZSntwk+VR9PMzHqIyKa4hwGQOvUWzntDb4ertyys2EuUtaj1CfOx6+YJMUo08JnK4uzKzahSZ8xYAIMxbOHHzKb79IPpqkhKgQVbvMW6sQTmFFItySolgOR93J/WD5KAUkgkF8G9o3mjGAVQV6wTMSEKYBxM/UN9PeIS6sVU5RWDLcslIDg9Q6vbrmJyqDYAXLqN8BkkcA8u7iCZ6kuNoYJ5fsxuLD2iHxRatl+lzkJ3SlgJ7PZ/3DjJgymHiLXtQncPKFDAJDs/XI7QJqNP5UlUvaT0wxDu/P+IAodQnyULTLDpUbuLdH7GM2nI0xDBVQhLpLljtV5i10hykHGR9IDn6TK8UMt9t1JJdg+SXZ7YhZUVG5YILt8+fwnl+Y0dHSmaTMQpO5ILAYI+ZieWOPUxVOIWmLKeSRMBlgkrKuxDevb/EN6eVUACYJipbKfbyb8nvFEzU0KZYSmWQVDh+tyWfngQyp6uTMIPjJdRchRA3E3ADkB8xEm/goCn71zAFLS6jtezh/29IonLWiaUlRClAblli+GuezX9YDOqbZy1bAUhR29GdgRboII0zfOmvs2IWTcg8WDP6C1hCk0tOk0xutCpMpSQT5wWJYJ3G4VcszvcdYT0uqy1S1mcHYFi1yXszc56Q8VJTJHgzCFjabMHI6M/32jOVlClJRtSWKmPDcgflmFb2S/wAPFlKAh1bycsD5e17x1LWoY7ixfhRAg+ZoiiQp9pOXulvUY6YjNVVIUrUCFhjwOlv2hjFSOlJo3OiUnhShu+ZfmV1vx7CPdTnNF6+eghHqlQX69up4EUtZXRLRJG+aqYbiXYf9jDioW3OcxDS6fwpYQc5UeqjcxRXzbesLBIVVpM1aZYysseyRdR+kaaUNqAAG/CB2EJfh2RuUqceTsR6A+Y+5/SHNQsB+0c/gAOoTgxuwF/YRH4YT/UzUeG4SbqJGALkjsbNCbV1qmqTKTlZYnonk/fWNz8NTUU+4NhH0b7/KCSw6+6NJUz2ZCeM/xC3VhvlLS7Wz05vFEnUQpZBdybd/SCNT8ssuHBBBuzWP72jK00RxaZhZhUhQPm3pNlA3cHNofVK16pIVMlFKapEsCZLYecAklaO5dlCFsmQJgUlgNw+bvx+8DyKGZTKTMlzChSS4I+8R3jl6fRfkXzsq0LWRTpmpXTJUqzlz5HcMoM58xSAH5MR1T4hnTJBklSUywm3kup+CTxD2uoZOqS1LlAS6oDcuWLCY340fR2jES5c9UwymCSOWub940cPZnHyK6a0OpZ61oC1G7BOHBiiTUOyphBa7EMAT25xCE1JStgSyTxh8cQRPrylICQlyRaO/82aLyIZ6fJSZ6FpX4fW7APy7t0hxUS0JmS/L5SSd2btcuTknMZZO9LKUCkG7cfTpBFHWlbSVKaW74AJcnnLfzHOL7OtWPqdaDNJQQBvbh1WZvyf0irX5gcJSEkg5SRlvy/zCSspFU6gtJ3B8g4fg8PdveOWszHY5F+o4+sTw1Ox5vohNkqmTJbnalZCWSCb7mxl7w4VSpk00xV0+I0oDm5ClD2Cf/wBoO0fS5VQZbOFpUneAWUGJHlHoxDYccwn+NNREyo2SryJHlSXspVt6u7mz/wDGNlvRg7TpiOXKIcEd+8NlS0pUkpKVhnLOznAfrmAZK3ubw2k16FIEo7UbQ+/lTcOxY+giZOy4qitVSZyklHlZgAfXl4tqApIUSnzgfvwIKlU6CtK0oIINvMCGHUq7jtC34gqipe4JCEHys7gkOSQcsST+USqfRbtHlNPmqSlKiooDhJ4Tl2/OC6eV4pKJamIa1wVDlu7Xjyk1NapRBT5Rkgix/d+veA9GOzctYvez5yf2/OOddnK6oI1DTpUpK9oKyQNpBfYQXUVN1DfQxbSagiTJ3SytK3YGzAG5937cxUhlS2DM4YZ/j94pVSMkJUrk7/KXc4Y4bP1jnTxnJVp5T6QjYJ0x9qidqXIHW5F3yYFrqVUra6fKp/DV14+v6w30uRLKSmaLJBZXtwBlTNBMyqRUpHlJWCEqlsyEhL3B+npd4VN2DiqFGmUUyclScEEB8D6wfX1w8Lwpc3xCht9mu7OGbAFuntCvVUTZCkKQrYSTtCSC3q3V8QPS7wncUkEFyWzfn3eKcPYKe0PP61SEpmLdargbvMBhnu73/KKJ+ormkIcIGdo6+pvBM2QFU65stLDaVKUro7HaBYF4VGkTUMoqKVWszPw7Hi3ETFKtGTd4aCl1paHC0gg2NuTdh9YzFZXKStQRdLlibH3hlMmpleSavcpmYP2Ynv3hLMpCSSk2OHh8aSJm/h9GrVbUwk06T4k3ccIv78ffcRfrlYcD27wZQU/hygn8Srq+/viOXRoyybM6loSanMUohCPnWdifU8+wvDKsmMO5+xAmgS981c3hHkR/2PzH2FveOWac/g6pZAQlKE4SNo9vt/eB9QU1vvufvpF81bO3GPWE2oTlEBCfnmHYn1OT6DPtAceaFJ3LXPVj5UegNz7n/wDmNnoqAEkunceDezd8ZhFKlABKEjypASPQW/P94PmqKfKptz+0R5JUdxvBjIoApe8qJYvn9IbakB4Kt2Gt6i9u9ozNHXbVOgKsbJFnHL8dYa0FeZijLWSQsFlcg8N7E/QRkpKqCUHdmd02iC5qiCUkMSnr7/eYM+I6QJSFksRx1Gbd4e6TpikLUpbEmwboPswv+NKdRShW0KSl36uce2Y5L+dOu54YvTZakL3pWUXexYggv6iNRU0dPXJaeRKnkWmiyF/92+U98RjDv3BLHp3P+BiDZdYUHapJcpDp79fWNIyaDyQUivUPgiopFbSh0rIZsKvwcYjJayhSZhQUFJQSPzfI5vH0XRvieop0mWUpnSRcyplw3JHKePriGhk6TWByDSrPW6H9R+7R6IzV2eeUZRVHymZNWuW29yODxjBgwUKt4KFgIIAJOW5IHLerxvp3/wAaFd5M2VMBwUq/iI03/wAeViPKBL2uHdYfrbP09IG36Qxmn2YCp0+YlKlJ3FJF2uLXeLvh+lnKWnw5ZXcE5+h68R9A1LZJQqUsCWkHaSBgckD0FvWMxq/xSEDwqNHhIYgrPzqHZvl/XvExlyQyTvCHxBqMuQnZKBFQoELUFP4b2YHlbZPDtmM6mmOxJIJSQ/TnaW97RRMTyILRNmL2IcAJdsclz7cxdJLBWvSYSggBI55z29oPpEHwwnwwWPzcnPDRXI8zbgLX7Q+RLKUOkMSQQ4HL8cRjKRskAUwUVkBPl9fzH5j3g+dRU52lSbkLFxZ+Ga55awZ4Cmb5a9wBHUAP/wAg36+0VzphIZlE5wX9YhOui6vsXSdOAfzEAm/RovlU4MxMoF0uBY5+8e8MKi6QwDkWdw+H7MYq8DYonaCUsSElxls+oiuTehxSLqukVJUlwNhLM3Pdos1GqQdwWobyLB79AejNFtVqPi7UlTpZwCGAU5dy242/WE65KJiiVOWsAMnuTxEL9H0VyKog7EjcTkDP3YRdpcsiasJBBUC/QM5bNwzX9II00IQlQSLmxV0yGP8AjtF8jTJ01QUDZNg1iPsRbkiarsp1eaot4hK/9truGH8cQjqZjbtwLnA47xoBp85S90y4TYAcjPHMA1CQpe3LDLfzgiGMlYVh5InLRLKVPsCBYORwcc8Z6Qt/1AP1UGyWMW6jUrAABCurD76QuYkgn5TntGsYqtM5PSc9alKKyDfkufzMMpU9O0XZhcNHtLpS1Je+1nHDjq35+0FSdIYMQ5Hr/MTKSKimHU6fFn3+VFz68fuYbLWWv9/f7R0dHMtCfVaksWuosEjubJh1plL4KEyx+EeY9TlR9yY6OjmHtkKmdwB6esLaFQmT1TB8sseGj/sfmPsC3/5R0dCcOaZSUndMLJTcsblrt7xodJmSqpSglW5gGSRcAuHUWs7Y7d46OiWk0RInqnw/+KWA7Qu0Ogm+Kd25w+cPxHR0efiuRSm+JqqVS9oUoF2Lp97N7Qq+KJRmSTtB/wCXpY2jo6GXRMXpnNIk+ICSGaPNWoNqhNAcA+YM9urdI6OgTw0b/oQrpVzVFarPYWAtxYdrQTLoikAcR0dCmDOKFILpUUnqkkfpFsjW6lB/8q1joVH2vmOjo0TZLSFNfNXNJKlHzF2fmBUUQPEdHRVhQSnTkniCqbSZY4jo6CxJ1jILAADJ79XtxBsyoSqWUqbGR+L/AKtzHR0ZmiXRdptVLQ6VJN77iL9n9rW6Qr1I7phbj5bcWv16H3jo6Jsqq06mSpSdpDjl7W6d4OkUrDapO0qDgDDdOuHj2OhSBsAq5nirAlS0pBslL3va59oWTaFYVsIYkglrt9iOjopHPB3o9CjbMO5yluzd/XMMFkpSShSgTa2DHkdGc3WitHdDSu4ULix5j2u+G5Sx8t/WOjouJhJtMzGq/DqZTFNg4AzGdrdO2OHHcP16CPI6G2XHUTpakgEdOScN06QfK1BDeYsfQ372MdHRVWVZ/9k='
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState<Product>({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        imagen: ''
    });

    const categorias = [
        'Agrícola',
        'Manufacturado',
        'Cristalería',
        'Textil',
        'Alimentos',
        'Bebidas',
        'Otros'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (editingIndex !== null) {
            // Editar producto existente
            const updatedProducts = [...products];
            updatedProducts[editingIndex] = formData;
            setProducts(updatedProducts);
        } else {
            // Agregar nuevo producto
            setProducts(prev => [...prev, formData]);
        }

        // Resetear formulario
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            categoria: '',
            imagen: ''
        });
        setShowModal(false);
        setEditingIndex(null);
    };

    const handleDelete = (index: number) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            setProducts(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleEdit = (index: number) => {
        setFormData(products[index]);
        setEditingIndex(index);
        setShowModal(true);
    };

    const openAddModal = () => {
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            categoria: '',
            imagen: ''
        });
        setEditingIndex(null);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingIndex(null);
        setFormData({
            nombre: '',
            descripcion: '',
            precio: '',
            categoria: '',
            imagen: ''
        });
    };

    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-black text-gray-100">Mis Productos</h1>
                        <p className="text-gray-400 mt-2">Gestiona el catálogo de productos de tu negocio</p>
                    </div>
                    <button
                        onClick={openAddModal}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-semibold"
                    >
                        <AddCircleOutlineRoundedIcon />
                        Agregar Producto
                    </button>
                </div>

                {/* Grid de productos */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <div key={index} className="rounded-lg shadow-lg overflow-hidden bg-[#181818] border border-gray-800 hover:border-gray-600 transition-all duration-200">
                            <div className="h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={product.imagen}
                                    alt={product.nombre}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Sin+Imagen';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-100">{product.nombre}</h3>
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                        {product.categoria}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {product.descripcion}
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-bold text-green-500">{product.precio}</p>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(index)}
                                            className="p-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors"
                                            title="Editar"
                                        >
                                            <EditRoundedIcon fontSize="small" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                                            title="Eliminar"
                                        >
                                            <DeleteRoundedIcon fontSize="small" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No tienes productos registrados aún.</p>
                        <p className="text-gray-500 mt-2">Haz clic en "Agregar Producto" para comenzar.</p>
                    </div>
                )}
            </main>

            {/* Modal para agregar/editar producto */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#181818] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
                        <div className="flex justify-between items-center p-6 border-b border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-100">
                                {editingIndex !== null ? 'Editar Producto' : 'Agregar Nuevo Producto'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-100 transition-colors"
                            >
                                <CloseRoundedIcon />
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div>
                                <label className="block text-gray-100 font-semibold mb-2">
                                    Nombre del Producto <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Ej: Café Orgánico Premium"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-100 font-semibold mb-2">
                                    Descripción <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Describe las características principales de tu producto..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-100 font-semibold mb-2">
                                        Precio <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="precio"
                                        value={formData.precio}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="$0.00"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-100 font-semibold mb-2">
                                        Categoría <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="categoria"
                                        value={formData.categoria}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Selecciona una categoría</option>
                                        {categorias.map((cat, idx) => (
                                            <option key={idx} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-100 font-semibold mb-2">
                                    URL de la Imagen <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    name="imagen"
                                    value={formData.imagen}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                />
                                {formData.imagen && (
                                    <div className="mt-3">
                                        <p className="text-sm text-gray-400 mb-2">Vista previa:</p>
                                        <img
                                            src={formData.imagen}
                                            alt="Vista previa"
                                            className="w-full h-48 object-cover rounded-lg"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=URL+Invalida';
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                                >
                                    {editingIndex !== null ? 'Guardar Cambios' : 'Agregar Producto'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProviderProducts;
